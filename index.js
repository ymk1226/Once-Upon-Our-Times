



let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

    document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);


const form = document.querySelector("#rsvp-form");
const fnameInput = document.querySelector("#fname");
const lnameInput = document.querySelector("#lname");
const emailInput = document.querySelector("#email");
const button = document.querySelector("#rsvp-button");
const participantsDiv = document.querySelector(".rsvp-participants");
const closeButton = document.getElementById("closebtn");

const addParticipant = (event) => {
  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const email = emailInput.value;
  const guest = document.createElement("p");
  guest.textContent = "🥂 " + fname + " " + lname + " is attending to celebrate the wedding of J&E";
  participantsDiv.appendChild(guest);
};

const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  const rsvpInputs = document.querySelector("#rsvp-form").elements;

  let person = {
    fname: rsvpInputs[0].value,
    lname: rsvpInputs[1].value,
    email: rsvpInputs[2].value,
  }

  const fname = document.getElementById("fname");
  if (fname.value.length <2) {
    containsErrors = true;
    fname.classList.add("error");
  } else {
    fname.classList.remove("error");
  }
  const lname = document.getElementById("lname");
  if (lname.value.length <2) {
    containsErrors = true;
    lname.classList.add("error");
  } else {
    lname.classList.remove("error");
  }

    const email = document.getElementById("email");
  if (email.value.length <2) {
    containsErrors = true;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (containsErrors == false) {
    addParticipant(person);
    toggleModal()
      fname.value = "";
      fname.classList.remove("error");
      lname.value = "";
      lname.classList.remove("error");
      email.value = "";
      email.classList.remove("error");
  }


};

closeButton.style.transition = "opacity 0.3s ease";
form.addEventListener("submit",validateForm);
closeButton.addEventListener("click", () => {
  const thanksModal = document.getElementById("success-modal");
  thanksModal.style.display = "none";
});
closeButton.addEventListener("mouseover", () => {
  closeButton.textContent = "Close X";
});

closeButton.addEventListener("mouseout", () => {
  closeButton.textContent = "X";
});

const toggleModal = (person) => {
    let modal = 0;

    const thanksModal = document.getElementById("success-modal");
    const modalContent = document.getElementById("modal-item");
    thanksModal.style.display = "flex";


    modalContent.textContent = "✨ Thank you " + fname.value + " " + lname.value + "! Your RSVP has been received. Our happily ever after just got even happier because you'll be celebrating with us. We can't wait to see you there! ✨";


    setTimeout ( () => {
    thanksModal.style.display = "none";
    }, 5000);
};


  let rotateFactor = 0;
  let modalImage = document.getElementById("modalimg");

const animateImage = () => {
  if (rotateFactor == 0) {
    rotateFactor = 10;
  } else {
    rotateFactor = 0;
  }

  modalImage.style.transform = `rotate(${rotateFactor}deg)`;

};

let intervalId = setInterval(animateImage, 500);
