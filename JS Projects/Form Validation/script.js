

let submitBtn = document.querySelector(".submitBtn");
let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let numError = document.querySelector(".numError");
let passError = document.querySelector(".passError");
let cpassError = document.querySelector(".cpassError");



submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateName() && validateEmail() && validtatePhone()) {
    alert("Form Submitted Successfully");
    nameError.innerHTML = "";
    nameError.style.paddingTop = "0px";
    emailError.innerHTML = "";
    emailError.style.paddingTop = "0px";
    numError.innerHTML = "";
    numError.style.paddingTop = "0px";
  }
})


// name validation
function validateName() {
  let name = document.getElementById('name').value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.style.color = "red";
    nameError.style.fontWeight = "500";
    nameError.style.paddingTop = "5px";
    return false;
  }
  return true
};


// email validation

function validateEmail() {
  let email = document.getElementById("email").value;
  let name = document.getElementById('name').value;
  if (name.length > 0) {
    nameError.innerHTML = "";
    nameError.style.paddingTop = "0px";
  }

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.style.color = "red";
    emailError.style.fontWeight = "500";
    emailError.style.paddingTop = "5px";
    return false;
  }


  else if (!email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Please enter a valid email!";
    emailError.style.color = "red";
    emailError.style.fontWeight = "500";
    emailError.style.paddingTop = "5px";
    return false;
  }
  return true;
}

// phone validation
function validtatePhone() {
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  if(email.length > 0){
    emailError.innerHTML = "";
    emailError.style.paddingTop = "0px";
  }

  if(phone.length == 0){
    numError.innerHTML = "Phone Number is required!";
    numError.style.color = "red";
    numError.style.fontWeight = "500";
    numError.style.paddingTop = "5px";
    return false;
  }

  else if(isNaN(phone)){
    numError.innerHTML = "Phone Number can't be alphabetical!";
    numError.style.color = "red";
    numError.style.fontWeight = "500";
    numError.style.paddingTop = "5px";
    return false;
  }
  return true;
}

// password validation
function validatePass(){
  let pass = document.getElementById("pass").value;
  let phone = document.getElementById("phone").value;
  if(phone.length > 0){
    numError.innerHTML = "";
    numError.style.paddingTop = "0px";
  }

  if(pass.length == 0){
    numError.innerHTML = "Password is required!";
    numError.style.color = "red";
    numError.style.fontWeight = "500";
    numError.style.paddingTop = "5px";
    return false;
  }

  

  return true;


}