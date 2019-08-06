const scriptURL = 'https://script.google.com/macros/s/AKfycbzrKqVJEidj98LDaebjqwQX4Ti5tjvWcx52oLBrQwKqDH29_uo/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
	e.preventDefault();

	fetch(scriptURL, {
		method: 'POST',
		body: new FormData(form),
	});
	document.getElementById('test-form').reset();
	window.setTimeout(function() {
		window.location.href = 'index.html';
	}, 2000);
	return;
});

$(document).ready(function() {
	$('select#volunteersList').change(function() {
		var guestName = document.getElementById('guestName');
		if (
			$(this)
				.children('option:selected')
				.val() === 'Guest Visitor'
		) {
			guestName.innerHTML = '<input type="text" placeholder="Guest Name" class="guest-name" name="Other" />';
		} else document.getElementById('guestName').innerHTML = '';
	});
});
