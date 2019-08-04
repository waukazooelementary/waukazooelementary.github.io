function passWord() {
	var testV = 1;
	var pass1 = prompt('Please Enter Your Password', ' ');
	while (testV < 3) {
		if (!pass1) history.go(-1);
		if (pass1.toLowerCase() == 'letmein') {
			window.open(
				'https://docs.google.com/spreadsheets/d/13Mg3vM2jQj6JEfR1AHFcKV6NBIrSm4TnFr4tr-wSDFE/edit?usp=sharing',
				'_blank'
			);
			break;
		}
		testV += 1;
		var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.', 'Password');
	}
	if ((pass1.toLowerCase() != 'password') & (testV == 3)) history.go(-1);
	return ' ';
}
