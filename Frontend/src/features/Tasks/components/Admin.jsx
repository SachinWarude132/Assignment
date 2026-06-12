import { useEffect, useState } from "react";

import { getAllUsers } from "../services/admin.api";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const data =
          await getAllUsers();

        setUsers(data.users);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="admin-page">
      <div className="panel-card admin-card">
        <div className="section-header">
          <div>
            <p className="eyebrow">Admin</p>
            <h1>All Users</h1>
          </div>
        </div>
        <div className="user-grid">
          {users.map((user) => (
            <article key={user._id} className="user-card">
              <div className="user-card__top">
                <h3>{user.username}</h3>
                <span className="user-role">{user.role}</span>
              </div>
              <p>{user.email}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;