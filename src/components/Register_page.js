import "./Register_page.css";
import { register } from "../utils.js";

const Register_page = () => {
  const handleClick = async () => {
    const email = document.getElementById("email_input").value;
    const password = document.getElementById("password_input").value;
    const firstName = document.getElementById("firstName_input").value;
    const lastName = document.getElementById("lastName_input").value;
    if (
      email === null ||
      password === null ||
      firstName === null ||
      lastName === null
    ) {
      alert("Please enter all fields");
      return;
    }
    const credential = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    try {
      const resp = await register(credential);
      alert("Successfully created!");
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
        <h2>Create account</h2>
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
        <div id="fill_in2">
          <label for="firstName" id="firstName_label">
            First Name:
          </label>
          <input type="text" id="firstName_input" name="firstName"></input>
        </div>
        <div id="fill_in3">
          <label for="lastName" id="lastName_label">
            Last Name:
          </label>
          <input type="text" id="lastName_input" name="lastName"></input>
        </div>
        <button id="register_button" onClick={handleClick}>
          Create account
        </button>
        <div id="frame98">
          <div id="text0">Have an account?</div>
          <div id="text1">Sign up</div>
        </div>
      </div>
    </div>
  );
};

export default Register_page;
