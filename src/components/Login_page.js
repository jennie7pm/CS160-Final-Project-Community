import "./Login_page.css";
import { login } from "../utils.js";

const Login_page = () => {
  const handleClick = async () => {
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    if (email === null || password === null) {
      alert("Please enter both fields");
      return;
    }
    const credential = { email: email, password: password };
    try {
      const resp = await login(credential);
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

  return (
    <div id="page">
      <div id="Onboarding_card">
        <div
          id="logo"
          style={{
            width: "50px",
            height: "50px",
            background: "var(--grey-lightest, #D9D9D9)",
          }}
        ></div>
        <h2>Welcome back</h2>
        <div id="fill_in0">
          <label for="email" id="email_label">
            Email:
          </label>
          <input type="text" id="email_input" name="email"></input>
        </div>
        <div id="fill_in1">
          <label for="password" id="password_label">
            Password:
          </label>
          <input type="text" id="password_input" name="password"></input>
        </div>
        <button id="login_button" onClick={handleClick}>
          Log in
        </button>
        <div id="frame98">
          <div id="text0">Don’t have an account?</div>
          <div id="text1">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Login_page;
