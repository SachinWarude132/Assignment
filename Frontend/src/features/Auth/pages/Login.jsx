import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

const Login = () => {
  const navigate = useNavigate()
  const { handleLogin, loading } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   setError("")

  //   try {
  //     await handleLogin(username, password)
  //     navigate("/home")
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Login failed. Please try again.")
  //   }
  // }

const handleSubmit = async (event) => {
  event.preventDefault();

  console.log("STEP 1");

  try {
    console.log("STEP 2");

    const result = await handleLogin(
      username,
      password
    );

    console.log("STEP 3", result);

    navigate("/home");
  } catch (err) {
    console.log("STEP ERROR", err);

    setError(
      err.response?.data?.message ||
      "Login failed. Please try again."
    );
  }
};


  return (
    <div className="auth-page auth-page--login">
      <div className="auth-card">
        <div className="auth-card__header">
          <h2>Login</h2>
          <p className="auth-card__subtitle">Access your task dashboard with your credentials.</p>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="form-label">
            <span>Username</span>
            <input
              className="input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="form-label">
            <span>Password</span>
            <input
              className="input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button className="button button--primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="auth-card__footer">
          Don&apos;t have an account? <Link className="link" to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login