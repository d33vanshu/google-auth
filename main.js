const Register = (e) => {
  e.preventDefault();
  let formdata = {
    name: document.getElementById("inp1").value,
    email: document.getElementById("inp2").value,
    password: document.getElementById("inp3").value,
    username: document.getElementById("inp4").value,
    mobile: document.getElementById("inp5").value,
    description: document.getElementById("inp6").value,
  };
  formdata = JSON.stringify(formdata);
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: formdata,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res:", res);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
const Login = (e) => {
  e.preventDefault();
  let formdata = {
    username: document.getElementById("inp7").value,
    password: document.getElementById("inp8").value,
  };
  body = JSON.stringify(formdata);
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log("res:", res);
      let u = formdata.username;
      let t = res.token;
      if (res.error === false) {
        getmyProfile(u, t);
      } else {
        alert("Invalid Credentials!!");
      }
    })
    .catch((err) => {
      alert(err.message);
      console.log("err:", err);
    });
};

const getmyProfile = (username, token) => {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      window.location.href = "home.html";
    })
    .catch((err) => {
      console.log(`err:`, err);
    });
};

//export { Login };
