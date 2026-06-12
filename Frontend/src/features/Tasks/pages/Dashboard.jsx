import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../../Auth/hooks/useAuth";
import { useTask } from "../hooks/useTask";
import { getAllUsers } from "../services/admin.api";
import CreateTask from "./Createtask";

const Dashboard = () => {
const {
tasks,
fetchTasks,
handleDeleteTask,
handleUpdateTask,
} = useTask();

const { user, handleLogout } = useAuth();

const navigate = useNavigate();

const [editingId, setEditingId] = useState(null);
const [editTitle, setEditTitle] = useState("");
const [editDescription, setEditDescription] = useState("");

const [users, setUsers] = useState([]);
const [showUsers, setShowUsers] = useState(false);
const [accessError, setAccessError] = useState("");

useEffect(() => {
  fetchTasks();
}, []);

const fetchUsers = async () => {
  try {
    const data = await getAllUsers();
    setUsers(data.users);
  } catch (err) {
    console.log(err);
  }
};

const getUsersHandler = async () => {
  if (user?.role !== "admin") {
    setAccessError("Access denied: this action is for admins only.");
    return;
  }

  setAccessError("");

  if (!showUsers) {
    await fetchUsers();
  }

  setShowUsers(!showUsers);
};

const logoutHandler = async () => {
await handleLogout();


navigate("/");


};

return (
  <div className="dashboard-page">
    <section className="dashboard-header">
      <div>
        <p className="eyebrow">Welcome back</p>
        <h1>Welcome, {user?.username}</h1>
        <p className="dashboard-lead">Manage tasks, update statuses, and review user access from one dashboard.</p>
      </div>
      <button className="button button--secondary" onClick={logoutHandler}>
        Logout
      </button>
    </section>

    <CreateTask />
    <br />
    <div className="dashboard-grid">
      <section className="panel-card tasks-panel">
        <div className="section-header">
          <div>
            <p className="eyebrow">Task Center</p>
            <h2>My Tasks</h2>
          </div>
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <article key={task._id} className="task-card">
              {editingId === task._id ? (
                <div className="task-edit-row">
                  <input
                    className="input-field"
                    placeholder="Task title"
                    value={editTitle}
                    onChange={(e) =>
                      setEditTitle(e.target.value)
                    }
                  />
                  <textarea
                    className="input-field textarea-field"
                    placeholder="Task description"
                    value={editDescription}
                    onChange={(e) =>
                      setEditDescription(e.target.value)
                    }
                    rows="2"
                  />
                  <button
                    className="button button--primary"
                    onClick={async () => {
                      await handleUpdateTask(
                        task._id,
                        {
                          title: editTitle,
                          description: editDescription,
                        }
                      );
                      setEditingId(null);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <div className="task-card__header">
                    <h3>{task.title}</h3>
                    <span className={`task-badge ${task.status === "completed" ? "task-badge--success" : "task-badge--pending"}`}>
                      {task.status}
                    </span>
                  </div>
                  {task.description && (
                    <p className="task-description">{task.description}</p>
                  )}
                  <div className="task-card__actions">
                    <button
                      className="button button--ghost"
                      onClick={() => {
                        setEditingId(task._id);
                        setEditTitle(task.title);
                        setEditDescription(task.description || "");
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="button button--danger"
                      onClick={() =>
                        handleDeleteTask(task._id)
                      }
                    >
                      Delete
                    </button>
                    <button
                      className="button button--ghost"
                      onClick={() =>
                        handleUpdateTask(
                          task._id,
                          {
                            status:
                              task.status ===
                              "pending"
                                ? "completed"
                                : "pending",
                          }
                        )
                      }
                    >
                      Toggle Status
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="panel-card admin-panel">
        <div className="section-header">
          <div>
            <p className="eyebrow">Admin</p>
            <h2>Admin Access</h2>
          </div>
        </div>
        <div className="admin-profile-card">
          <div className="user-card__top">
            <div>
              <h4>{user?.username}</h4>
              <p className="muted-text">{user?.role === "admin" ? "Administrator access" : "Standard user access"}</p>
            </div>
            <span className={`user-role ${user?.role !== "admin" ? "user-role--inactive" : ""}`}>
              {user?.role || "guest"}
            </span>
          </div>
          {user?.email && <p>{user.email}</p>}
        </div>
        <div className="section-header">
          <div>
            <p className="eyebrow">User Operations</p>
            <p className="muted-text">
              {user?.role === "admin"
                ? "You can fetch the full user list."
                : "This action is visible but restricted to admins."}
            </p>
          </div>
          <button className="button button--primary" onClick={getUsersHandler}>
            {showUsers ? "Hide Users" : "Get Users"}
          </button>
        </div>
        {accessError && <p className="form-error">{accessError}</p>}
        {showUsers && (
          <div className="user-grid">
            {users.map((userData) => (
              <article key={userData._id} className="user-card">
                <div className="user-card__top">
                  <h4>{userData.username}</h4>
                  <span className="user-role">{userData.role}</span>
                </div>
                <p>{userData.email}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  </div>
);
};

export default Dashboard;
