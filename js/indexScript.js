// James Script for HomePage (Note for self;need to add validation for fields)

const signupFormElement = document.getElementById("signupForm");
const inputNameElement = document.getElementById("signupName");
const inputAgeElement = document.getElementById("signupAge");
const inputGenderElement = document.getElementById("signupGender");
const inputEmailElement = document.getElementById("signupEmail");
const marketingCheckbox = document.getElementById("checkBoxMarketing");
const getDetailsButton = document.getElementById("btnGetDetails");


getDetailsButton.disabled = true; // I added this here to ensure the button element is disabled until the below conditions are met


inputNameElement.addEventListener("input", () => { //arrow function that will be executed on the 'input' event. 
//The inputNameElement refers to id=signupName taken from the html using document.getElementById
//The event listener detects user input. 
	const name = inputNameElement.value.trim(); //signupFormElement refers to the DOM element with the id=userName, to capture its value to store it as a variable
	// .value gets the text inside the input field and sFormInput stores that text as a JS variable
	getDetailsButton.disabled = name.length <= 2;
	});

signupFormElement.addEventListener("submit", getDetails); // calls "signupForm" element from html. The event listener ...

function getDetails(event) { //The main function used to validate the input fields and checkbox
	event.preventDefault();

  const name = inputNameElement.value.trim(); //trim method removes the white space before and after the string
  const age = parseInt(inputAgeElement.value); //parseInt is a js function that changes the string into a number 
  const gender = inputGenderElement.value;
  const email = inputEmailElement.value.trim();
  const marketing = marketingCheckbox.checked;

  if (!name || age <= 0 || !Number.isInteger(age) || !gender || !email.includes("@") || !marketing) { // https://www.w3schools.com/jsref/jsref_isinteger.asp ; used this resource to confirm the 'age' is a whole number. It returns the method if it is true
    alert("Please fill out all fields correctly and agree to marketing")
    return; // This exits the function so the next part of code does not run. If return; was not used, the pages crashes and refreshes because the code keeps going.  
  }

  alert("Thanks for signing up, " + name + "!");

  signupFormElement.reset();// Resets the form if the alert (Thanks for signing up, " + name + "!") is executed
  getDetailsButton.disabled = true;  // Disable the button again after the alert
}




