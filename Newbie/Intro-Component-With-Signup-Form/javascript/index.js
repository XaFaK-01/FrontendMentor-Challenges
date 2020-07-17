document.querySelector(".btn").addEventListener("click", function () {
  checkInputBox();
});
function checkInputBox() {
  var firstName = [document.getElementsByTagName("input").item(0).value, 0];
  var lastName = [document.getElementsByTagName("input").item(1).value, 1];
  var email = [document.getElementsByTagName("input").item(2).value, 2];
  var password = [document.getElementsByTagName("input").item(3).value, 3];

  var goodToGo1 = validateEmptyValue(firstName);
  var goodToGo2 = validateEmptyValue(lastName);
  var goodToGo3 = validateEmptyValue(email);
  var goodToGo4 = validateEmptyValue(password);

  if (goodToGo1 && goodToGo2 && goodToGo3 && goodToGo4) {
    console.log("good to go!");
    //code for submitting the form
    document
      .getElementsByTagName("form")[0]
      .setAttribute("action", "mailto:example@example.com");
    document.getElementsByTagName("form")[0].setAttribute("method", "POST");
    document.querySelector(".btn").setAttribute("type", "submit");
    document.getElementById("form_email").submit();
  } else {
    document.querySelector(".btn").setAttribute("type", "button");
  }
}

document.getElementsByTagName("form")[0].setAttribute("method", "POST");

function validateEmptyValue(receivedValue) {
  if (receivedValue[0] == "") {
    return showErrorMessage(receivedValue);
  } else {
    if (receivedValue[1] == 2) {
      //special case for email
      var userEmail = document.getElementsByTagName("input").item(2).value;
      if (userEmail.includes("@") && userEmail.includes(".com")) {
        return hideErrorMessage(receivedValue);
      } else {
        return showErrorMessage(receivedValue);
      }
    } else {
      return hideErrorMessage(receivedValue);
    }
  }
}

function showErrorMessage(receivedValue) {
  document
    .getElementsByClassName("error_icon")
    [receivedValue[1]].classList.remove("icon-error-invisible");
  document
    .getElementsByClassName("error_icon")
    [receivedValue[1]].classList.add("icon-error-visible");
  document
    .getElementsByClassName("error_message")
    [receivedValue[1]].classList.remove("form-text-invisible");
  document
    .getElementsByClassName("error_message")
    [receivedValue[1]].classList.add("form-text-visible");
  // changing text color and border color
  document
    .getElementsByClassName("form-control")
    [receivedValue[1]].classList.add("form-control-incorrect");

  return false;
}

function hideErrorMessage(receivedValue) {
  document
    .getElementsByClassName("error_icon")
    [receivedValue[1]].classList.remove("icon-error-visible");
  document
    .getElementsByClassName("error_icon")
    [receivedValue[1]].classList.add("icon-error-invisible");
  document
    .getElementsByClassName("error_message")
    [receivedValue[1]].classList.remove("form-text-visible");
  document
    .getElementsByClassName("error_message")
    [receivedValue[1]].classList.add("form-text-invisible");
  document
    .getElementsByClassName("form-control")
    [receivedValue[1]].classList.remove("form-control-incorrect");

  return true;
}
