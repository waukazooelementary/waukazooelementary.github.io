Papa.parse(
	'https://raw.githubusercontent.com/waukazooelementary/waukazooelementary.github.io/master/Waukazoo%20Volunteer%20List.csv',
	{
		download: true,
		header: true,
		complete: function(results) {
			var volunteerSelect = document.getElementById('volunteersList');
			var frag = document.createDocumentFragment();
			results.data.forEach(function(row) {
				if (row.firstname !== '') {
					elOption = frag.appendChild(document.createElement('option'));
					elOption.text = row.firstname + ' ' + row.lastname;
					volunteerSelect.appendChild(elOption);
				}
			});
			$(volunteerSelect).chosen();
		},
	}
);

$(document).ready(function() {
	$('select#volunteersList').change(function() {
		var guestOut = document.getElementById('guestOut');
		if (
			$(this)
				.children('option:selected')
				.val() === 'Guest Visitor'
		) {
			guestOut.innerHTML = '<input type="text" placeholder="Guest Name" class="guest-out-name" name="Other" />';
		} else {
			document.getElementById('guestOut').innerHTML = '';
		}
	});
});
