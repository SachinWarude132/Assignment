import { useState } from "react"
import { Link, useNavigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

const Register = () => {
  const navigate = useNavigate()
  const { handleRegister, loading } = useAuth()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")

    try {
      await handleRegister(username, email, password)
      navigate("/home")
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.")
    }
  }

  return (
    <div className="auth-page auth-page--register">
      <div className="auth-card">
        <div className="auth-card__header">
          <h2>Register</h2>
          <p className="auth-card__subtitle">Create your account and start managing tasks efficiently.</p>
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
            <span>Email</span>
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="auth-card__footer">
          Already have an account? <Link className="link" to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register