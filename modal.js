// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("postForm");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

btn.onclick = function() {
  const selName = document.getElementById("volunteersList");
  const location = document.getElementById("class");
  if (selName.selectedIndex < 1) {
    alert("Please select your name.");
    selName.focus();
    return false;
  } else if (location.value.length < 1) {
    alert("Please input your location.");
    location.focus();
    return false;
  }
  return (modal.style.display = "block");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Guest Modal//
const guestModal = document.getElementById("guestModal");
const okBtn = document.getElementById("ok");
const guest = document.getElementById("guestName");
let hasFired = false;

guest.onkeydown = function() {
  if (!hasFired) {
    guestModal.style.display = "block";
  } else {
    guestModal.style.display = "none";
  }
};

okBtn.onclick = function() {
  hasFired = true;
  guestModal.style.display = "none";
};

const notes = document.getElementById("notes");

const isNoteEmpty = () => {
  if (notes.value.length < 1) {
    notes.value = "";
    return;
  }
};
