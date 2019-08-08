// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('postForm');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal

btn.onclick = function() {
	const selName = document.getElementById('volunteersList');
	if (selName.selectedIndex < 1) {
		alert('Please select your name.');
		selName.focus();
		return false;
	}
	return (modal.style.display = 'block');
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

const guestOutModal = document.getElementById('guestOutModal');
const guestOut = document.getElementById('guestOut');
const outOk = document.getElementById('outOk');
let outHasFired = false;
console.log(guestOut);
guestOut.onkeydown = function() {
	if (!outHasFired) {
		guestOutModal.style.display = 'block';
	} else {
		guestOutModal.style.display = 'none';
	}
};

outOk.onclick = function() {
	outHasFired = true;
	guestOutModal.style.display = 'none';
};
