const scriptURL = 'https://script.google.com/macros/s/AKfycbzrKqVJEidj98LDaebjqwQX4Ti5tjvWcx52oLBrQwKqDH29_uo/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
	e.preventDefault();

	fetch(scriptURL, {
		method: 'POST',
		body: new FormData(form),
	});
	window.setTimeout(function() {
		window.location.href = 'index.html';
	}, 2000);
	document.getElementById('test-form').reset();

	//     .then(function (res) {
	//       document.getElementById('test-form').reset()
	//       if (res.ok) {
	//         setTimeout(function () {
	//           window.location.href = 'index.html';
	//         }, 2000);
	//       } else if (res.status == 401) {
	//         alert("Oops! You are not authorized.");
	//       }
	//     }, function (e) {
	//       alert("Error submitting form!");
	//     });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

$(document).ready(function() {
	$('select#volunteersList').change(function() {
		var guestName = document.getElementById('guestName');
		if (
			$(this)
				.children('option:selected')
				.val() === 'Guest Visitor'
		) {
			guestName.innerHTML = 'Name: <input type="text" name="Other" />';
		} else document.getElementById('guestName').innerHTML = '';
	});
});
