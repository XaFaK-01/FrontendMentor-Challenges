document.querySelector(".btn").addEventListener("click", function () {
  validateEmail();
});

function validateEmail() {
  var userEmail = document.getElementById("exampleInputEmail1").value;
  if (userEmail.includes("@") && userEmail.includes(".com")) {
    document.getElementById("form_email").submit();
    document
      .getElementsByTagName("form")[0]
      .setAttribute("action", "mailto:example@example.com");

    document.getElementsByTagName("form")[0].setAttribute("method", "POST");
    document.getElementById("submit-button").setAttribute("type", "submit");
  } else {
    console.log("no @ found");
    document.getElementById("submit-button").setAttribute("type", "button");
    invalidEmailMessage();
    document
      .getElementById("error-icon")
      .classList.remove("icon-error-invisible");
    document.getElementById("error-icon").classList.add("icon-error-visible");
  }
}

function invalidEmailMessage() {
  document.getElementById("emailHelp").innerHTML =
    "Please provide a valid email!";
}

var form_control = document.getElementById("exampleInputEmail1");

form_control.addEventListener(
  "focus",
  function () {
    if (form_control.focus) {
      console.log("form-control has focus");
      document.getElementById("emailHelp").innerHTML = "";
      document
        .getElementById("error-icon")
        .classList.remove("icon-error-visible");
      document
        .getElementById("error-icon")
        .classList.add("icon-error-invisible");
    }
  },
  false
);

form_control.addEventListener(
  "blur",
  function () {
    if (this.blur) {
      console.log("form-control does not have focus");
    }
  },
  false
);
