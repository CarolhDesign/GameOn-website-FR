function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}


const form = document.getElementById("form");

closeBtn.addEventListener('click' , (e) => {

  closeModal();
});

form.addEventListener('submit' , (e) => {
  validate();
  e.preventDefault();
});


function validate(){
const prenom = document.getElementById("prenom");
const prenomValue = prenom.value.trim();
const nom = document.getElementById("nom");
const nomValue = nom.value.trim();
const email = document.getElementById("email");
const emailValue = email.value.trim();
const birthdate = document.getElementById("birthdate");
const birthdateValue = birthdate.value.trim();
const quantity = document.getElementById("quantity");
const quantityValue = quantity.value.trim();
const checkbox = document.getElementById("checkbox1");
const checkboxValue = checkbox.value.trim();
const formMsg = document.querySelector(".form-msg");
const formMsgP = formMsg.querySelector("p");

const modalBody = document.querySelector(".modal-body");
let isError = 0;

  if(prenomValue === ''){
    errorMessage(prenom, "Le champ ne peut pas être vide");
    isError = isError + 1;
  }else if (prenomValue.length < 3){
    errorMessage(prenom, "Le champ doit faire minimum 3 caractères");
    isError = isError + 1;
    }else{
    successMessage(prenom);
  }

  if(nomValue === ''){
    errorMessage(nom, "Le champ ne peut pas être vide");
    isError = isError + 1;
    }else if (nomValue.length < 3){
    errorMessage(nom, "Le champ doit faire minimum 3 caractères");
    isError = isError + 1;
  }else {
    successMessage(nom);
  }

  if(emailValue === ''){
    errorMessage(email, "Veuillez entrer une adresse email");
    isError = isError + 1;
  }
  else if (!validateEmail(emailValue)){
    errorMessage(email, "Veuillez entrer une adresse mail valide");
    isError = isError + 1;
  }else{
    successMessage(email);
  }

  if(birthdateValue === ''){
    errorMessage(birthdate, "Veuillez entrer une date valide");
    isError = isError + 1;

  }else{
    successMessage(birthdate);
  }

  if(quantityValue === ''){
    errorMessage(quantity, "Veuillez sélectionner un nombre");
    isError = isError + 1;
    }else{
    successMessage(quantity);    
  }

    
  if(checkboxValue.checked == false){
    isError = isError + 1;
        //mettre classe bg rouge
  }else{
    // mettre classe bg vert
  }

  if (isError == 0){
    form.style.display = "none";
    modalBody.className = "modal-body modal-design";
    formMsg.style.display = "flex";
    formMsgP.innerHTML = `Merci <span class="form-msg-txt">${prenomValue}</span><br> le message nous a bien été envoyé ! <br> On vous recontactera sur <span class="form-msg-txt">${emailValue}</span>`;
  }


};


const errorMessage = (input, message) => {
  const formControl = input.parentElement;
  const inputDesign = formControl.querySelector('.text-control');  
  const span = formControl.querySelector('span');

  inputDesign.classList.add('error');
  inputDesign.classList.remove("success");
  span.classList.add("span-class");
  span.style.display = "block";
  span.innerHTML = message;
}

const successMessage = (input) => {
  const formControl = input.parentElement;
  const inputDesign = formControl.querySelector('.text-control');

  const span = formControl.querySelector('span');
  inputDesign.classList.remove("error");
  inputDesign.classList.add('success');

  span.style.display = "none";
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateField(input){
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regex.test(String(input).toLowerCase());
}