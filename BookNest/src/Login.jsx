import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "849758882963-7gthf41bc7gp4q7ul3eovjs6etejvus1.apps.googleusercontent.com", // paste yours here
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin"),
        { theme: "outline", size: "large" }
      );
    };
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/google", {
        credential: response.credential,
      });

      console.log("🎉 Login success:", res.data);
      // You can store res.data or redirect now
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");

    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login-page">
      <h2>Welcome to BookNest</h2>
      <div id="google-signin"></div>
    </div>
  );
};

export default Login;
