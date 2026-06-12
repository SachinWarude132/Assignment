import { createBrowserRouter, Link } from "react-router"
import Login from "./features/Auth/pages/Login"
import Register from "./features/Auth/pages/Register"
import Home from "./features/Tasks/components/Home"
import ProtectedRoute from "./features/Auth/components/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="home-page">
        <h1>Home Page</h1>
        <p>Use the links below to log in or register.</p>
        <div className="home-actions">
          <Link className="button button--secondary" to="/login">
            Login
          </Link>
          <Link className="button button--secondary" to="/register">
            Register
          </Link>
        </div>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
])

export default router