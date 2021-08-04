let form = document.getElementById("forms");
function SignIn() {
  form.innerHTML = null;
  form.innerHTML = ` <div id="login">
    <h1>Login</h1>
    <form onsubmit="Login(event)">
        Username:
        <input type="text" id="inp7" />
        Password:
        <input type="text" id="inp8" />
        <input type="submit" />
        <input
            type="button"
            value="Create a account"
            id="inp0"
            onclick="SignUp()"
        />
    </form>
  </div>`;
}

function SignUp() {
  form.innerHTML = null;
  form.innerHTML = `<div id="register">
    <h1>Register</h1>
    <form onsubmit="Register(event)">
      Name: <input type="text" id="inp1" /> Email:
      <input type="text" id="inp2" /> Password:
      <input type="text" id="inp3" /> Username:
      <input type="text" id="inp4" /> Mobile:
      <input type="text" id="inp5" /> Description:
      <input type="text" id="inp6" />
      <input type="submit" />
      <input
        type="button"
        value="Sign in instead"
        id="inp0"
        onclick="SignIn()"
      />
    </form>
  </div>`;
}
