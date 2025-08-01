
//James' script for the BMI Calculator page

var btnElement = document.getElementById("btnDone");
var inputElement = document.getElementById("userName");
var messagefactElement = document.getElementById("messageFact");
var resetButton = document.getElementById("btnReset");
var resetBMIButton = document.getElementById("btnBMIReset");
var sumBMI = document.getElementById("btnCalculateBMI") //check, not sure if needed

btnElement.disabled = true; // I added this here to ensure the button element is disabled unless it contains an input length of 2 or more characters

inputElement.addEventListener("keyup", (event) => { //arrow function that will be executed on the 'keyup' event. 
//The inputElement refers to userName taken from the html using document.getELementById
//The event listener detects keystrokes upon release. 
	var sUserInput = inputElement.value; //inputElement refers to the DOM element with the id=userName, to capture its value to store it as a variable
	// .value gets the text inside the input field and sUserInput stores that text as a JS variable
	if (sUserInput.length > 2){
		btnElement.disabled = false; //The button will be active if this condition is false (more than 2 characters)
	} else{
		btnElement.disabled = true; //The button will be disabled if this condition is true (less than 2 characters)
	}
	if (event.key === "Enter" && sUserInput.length >= 2) { //checks two conditions at once when the user starts typing in the input field
	//The event.key === "Enter" checks if the Enter key was pressed on keyboard and(logical and) the user inout length is greater than or less than 2	
		DisplayData(); //This calls the function when enter key is selected on keyboard if the input length is greater than or equal to 2
	}
	});

//I Created two arrays and stored both of them in two js variables. There are 6 strings in each array but recognised as index 0 - 5. ; ref https://www.w3schools.com/js/js_arrays.asp
const bmiFacts = [
  "BMI stands for Body Mass Index, a simple calculation using height and weight",
  "a healthy BMI typically ranges from 18.5 to 24.9",
  "BMI is used worldwide as a general indicator of body fat levels",
  "BMI doesn’t distinguish between muscle and fat mass",
  "extreme BMI values (too low or too high) can be linked to higher health risks",
  "for most adults, BMI provides a useful rough guide to whether you're under or overweight",
  "BMI does not consider age, sex, or muscle composition"
];

const bmiTips = [
  "engage in regular physical activity, like walking or cycling for 30 minutes a day",
  "balance your calorie intake with your energy expenditure to maintain a healthy BMI",
  "track your BMI over time as part of a larger wellness routine",
  "avoid crash diets — aim for sustainable, long-term eating habits",
  "speak with a healthcare provider for a full health assessment, not just BMI",
  "try strength training to build muscle, which supports a healthy metabolism",
  "eat a mix of whole foods, fibre, lean proteins, and healthy fats to support your goals"
];
function DisplayData() {
	var iRandomFact = Math.floor(Math.random() * bmiFacts.length); //The Math.floor rounds to a whole number and Math.random() generates a decimal between 0 and just under 1 (0 -> 0.99; 0.56 for example). 
// Example;  0.43 (Math.random) * 3 (healthyEating) = 1.29 
//Then Math.floor(1.29) rounds it down to a whole number in this case 1 which becomes a random index from the array: incorporate leafy greens and vegetables such as spinach, kale and broccoli in your diet as they are rich in vitamins A,C and K as well as fiber and antioxidants that support heart and brain health"
//This value is then stored in the variable iRandomTip	
	var iRandomTip = Math.floor(Math.random() * bmiTips.length);

	var randomFact = bmiFacts[iRandomFact]; //[iRandomTip] store the index value that was generated earlier, stored in the variable healthyEating
	// randomTip now stores the string value obtained from that index number from the array healthyEating. 
	// If I created var randomTip = healthyEating[1], then index 1 from the array healthyEating would be stored in the variable randomTip
	var randomTip = bmiTips[iRandomTip];

	var userName = inputElement.value; //declaring a variable called userName that stores the value obtained from the inputElement(username) which the user typed in the input field with the id="username"
	var sMessageFact = "Hey " + userName + "!<br>" +
	"Did you know that " + randomFact + "," + "<br>" +
	"You should try to  " + randomTip + "."; //Message that appears after input box

		messagefactElement.innerHTML = sMessageFact;
		messagefactElement.style.color = "green"

		resetButton.style.display = "inline";

		resetButton.onclick = function (event) { //when the reset button is clicked 
			event.preventDefault(); //this stops the default bahaviour of browser from happening such as refreshing the page when the reset button is clicked
  			inputElement.value = ""; //the username is reset to "" (empty)
  			messagefactElement.innerText = ""; //the message fact that appears on screen is reset to "" (empty)
  		resetButton.style.display = "none";//This hides the reset button after it's selected
 /* When the reset button is clicked the btnElement is disabled until function is enabled again(if condition is met again whereas function DisplayData runs again). 
    This element is taken from html page that has id= btnDone using document.getElementById, 
    this is captured in script and in this case stored in the variable btnElement.
 */
  		btnElement.disabled = true;  
	};
}//end of DisplayData function

//This next part is for the BMI calculator
//First I'll create an array for the BMI categories, 
const bmiArray = [ //I used an array to define the ranges/categories for the BMI - ref: https://www.w3schools.com/js/js_const.asp ; Constant Objects and Arrays
  { min: 0, max: 18.4, label: "Underweight" }, //the minimum value here is 0 and the maximum is 18.4 , if the bmi calculated is within this range they will be in the Underweight category
  { min: 18.5, max: 24.9, label: "Healthy weight" },
  { min: 25, max: 29.9, label: "Overweight" },
  { min: 30, max: 39.9, label: "Obese" },
  { min: 40, max: 100, label: "Very severely obese" }
];
//I then create a funtion called getBMICategory and gets one input 'bmi'
function getBMICategory(bmi) { //This defines a function that takes one input, a value that I called bmi
//I now have to create a For loop through each object/label in the above array (bmiArray) as shown in week 7; you create a function with parameter(s), then when you parameter call the function you must provide the argument(s)
  for (let i = 0; i < bmiArray.length; i++) { // this goes through the full list in the array for the labels/categories for bmi
    if (bmi >= bmiArray[i].min && bmi <= bmiArray[i].max) { // if bmi value/number is greater than or equal to the minumum value &&(Logical AND operator; which means if both contions are true) if the bmi value/number is less than or equal to the maximum value    
      return bmiArray[i].label; //then return the label from the bmi array such as "Underweight"
    }
  }
  return "Undefined BMI category, Please make sure to input the requested information correctly and try again"; //This returns a message in the alert box if not defined in array. 
}

function calculateBMI(){ //this function calculate the bmi via the user inputs, that's if they passed the validation, and delivers an output in an alert box that inlcudes bmi category from the getBMICategory

	var userHeight = parseFloat(document.getElementById("height").value) / 100; // This gets the information from the html page id=height which is given by end-user in meters and converted to centimters here as the value is divided by 100. Now stored in the varibale userHeight.
  	var userWeight = parseFloat(document.getElementById("weight").value); // This gets the information from the html page id=weight which is given by end-user in kg and stored in the variable userWeight. 

  	// This IF statement will validate the user input, to make sure that a value greater than 0 is entered in either of the input fields and also empty/invalid fields
  		if (!userHeight || !userWeight || userHeight <= 0 || userWeight <= 0) { //week 6 javascript moodle, logical operators and if statement
    	//This not operator ! such as !userHeight is used to detect if the input field is invalid/empty. This covers two scenarious along with if the input field is less than or equal to 0.
    	//if this statement is true then the alert box below will appear
    	alert("Please enter a valid weight and height greater than 0");
    	//insert additional rest button here - to clear fileds even if they contain "0"
    	resetBMIButton.style.display = "inline"; //this shows the rest button after alert box
		resetBMIButton.onclick = function (event) { //refer to note after return; below
		event.preventDefault(); 
		// Clear weight and height inputs
    	document.getElementById("height").value = "";
    	document.getElementById("weight").value = "";

    	// Hide the BMI reset button again
    	resetBMIButton.style.display = "none";
    };

    	return; //week 6 moodle javascript 1- this will exit the function early if the above statement is true, if the statement is false, 
    	// then it moves to the next part below. This is essential to stop the calculateBMI function early.  
    	//I noticed early on that this does not allow the reset button to load in the case where 0 is only inputted. 
    	//I initially only included the reset button at the end of function for second alert if the statement was false.  
    	//I soon realised I could add the reset button here twice if this statement is true AFTER the alert box - "Please enter a valid weight and height greater than 0". 

  		}
  	//the variable I declared, bmi is equal to the result of weight in kg divided by the heights in meter squared 
  	var bmi = userWeight / (userHeight * userHeight); //the bmi 
  	//https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults this is where i got the formula to calculate BMI
	var bmiCategory = getBMICategory(bmi);  

  		alert("Your BMI is: " + bmi.toFixed(2) + "\nCategory: " + bmiCategory);
  	
  		resetBMIButton.style.display = "inline"; //shows the rest button after alert

		resetBMIButton.onclick = function (event) {
		event.preventDefault(); 
		// Clear weight and height inputs
    	document.getElementById("height").value = "";
    	document.getElementById("weight").value = "";

    	// Hide the BMI reset button again
    	resetBMIButton.style.display = "none";
  };
}
  	