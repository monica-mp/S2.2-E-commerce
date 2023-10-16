// Exercise 6
function validate() {
	let error = 0;
	
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value < 3 || !fName.value.match(/^[a-zA-Z]/,)){
		fName.classList.add("is-invalid");
		error++;
	}else{
		fName.classList.remove("is-invalid");
		fName.classList.add("is-valid");
	}

	if(fEmail.value == "" || fEmail.value < 3 || !fEmail.value.match(/\S+@\S+\.\S+/,)){
		fEmail.classList.add("is-invalid");
		error++;
	}else{
		fEmail.classList.remove("is-invalid");
		fEmail.classList.add("is-valid");
	}

	if(fAddress.value == "" || fAddress.value < 3 || !fAddress.value.match(/^[a-zA-Z]/,)){
		fAddress.classList.add("is-invalid");
		error++;
	}else{
		fAddress.classList.remove("is-invalid");
		fAddress.classList.add("is-valid");
	}

	if(fLastN.value == "" || fLastN.value < 3 || !fLastN.value.match(/^[a-zA-Z]{3,}$/,)){
		fLastN.classList.add("is-invalid");
		error++;
	}else{
		fLastN.classList.remove("is-invalid");
		fLastN.classList.add("is-valid");
	}

	if(fPassword.value == "" || fPassword.value < 3 || !fPassword.value.match(/^(?=.*[a-zA-Z])(?=.*\d)./,)){
		fPassword.classList.add("is-invalid");
		error++;
	}else{
		fPassword.classList.remove("is-invalid");
		fPassword.classList.add("is-valid");
	}

	if(fPhone.value == "" || fPhone.value < 9 || !fPhone.value.match(/^\d/,)){
		fPhone.classList.add("is-invalid");
		error++;
	}else{
		fPhone.classList.remove("is-invalid");
		fPhone.classList.add("is-valid");
	}
	 
	if(error>0){
		alert("Error. Form not sent");
		return false;
	}else{
		alert("Form sent");
		return true;
	}

}