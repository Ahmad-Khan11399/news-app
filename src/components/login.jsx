import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import News from "./news";
import "bootstrap/dist/css/bootstrap.css";
import { Form } from "react-bootstrap";
import "../App.css";
import "antd/dist/reset.css";
import "../index.css";
const Login = () => {
  const [showNews, setShowNews] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      setShowNews(true);
      // Perform any additional actions after successful login
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Google:", user);
      setShowNews(true);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="login-container">
      {!showNews ? (
        <div className="login-form">
          <h2 className="form-title">Log In</h2>

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="intro-btn">
              <button
                className="custom-button"
                type="submit"
                style={{ position: "absolute", left: "30%" }}
              >
                Log In
              </button>
              <button
                className="custom-button small"
                onClick={handleGoogleSignup}
                style={{ position: "absolute", left: "60%" }}
              >
                Sign in with Google
              </button>
            </div>
          </Form>
        </div>
      ) : (
        <News />
      )}
    </div>
  );
};

export default Login;
