// get a new date (locale machine date time)
const date = new Date();
// get the date as a string
const n = date.toDateString();
// get the time as a string
const time = date.toLocaleTimeString([], {
	hour: '2-digit',
	minute: '2-digit',
});

// find the html element with the id of time
// set the innerHTML of that element to the date a space the time
document.getElementById('date').innerHTML = n;
document.getElementById('time').innerHTML = time;
