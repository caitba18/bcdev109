function isValid() {
    if (firstName() && lastName() && email() && phone() && username() && password() && address() && city() && zipcode()) {
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
}

//FirstName.addEventListener('blur', lastName, false);
function lastName() {
    var validLastName = false; 
    var lastName = document.getElementById("LastName").value;
    var errorMessages = ""; 

    if (lastName==="null" || lastName==="" || lastName.length > 50) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastName.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastName = true;
                console.log("Last name valid")
        };

     //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastName);
}

function email() {
    var validEmail = false;
    var userEmail = document.getElementById("Email").value;
    var errorMessages = ""; 
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
} else {
    validEmail = true; //Or assign the value to a variable. For example validEmail = true
}
    document.getElementById("emailAddress").innerHTML = errorMessages;
    return (validEmail);
}

function phone() {
    var validPhone = false;
    var errorMessages = "";
    var phone = document.getElementById("Phone").value;
if (isNaN(phone) || phone.length >15 || phone===null || phone==="") {
    errorMessages += "<p>Invalid phone number </p>";
} else {
  validPhone = true; 
{ //Or assign the value to a variable. For example validPhone = true;
    document.getElementById("phoneNum").innerHTML = errorMessages;
    return (validPhone);


//You can also do pattern matching by using the match() method from the string object
//var numbers=/^[0-9]+$/;
//if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
//else
//...
}
    
function username() {
    var validUser = false;
    var errorMessages = "";
    var username = document.getElementById("Username").value;
    if (username.length > 12) {
        errorMessages += "<p>The username is required and must be less than 12 characters.</p>"
    } else {
        validUser = true;
    }
    document.getElementById("user").innerHTML = errorMessages;
    return (validUser);
}
    
function password() {
    var validPassword = false;
    var errorMessages = "";
    var password = document.getElementById("Password").value;
    if (password.length > 7) {
        errorMessages += "<p>The password is required and must be less than 7 characters.</p>";
    } else {
        validPassword = true;
    }
    document.getElementById("pass").innerHTML = errorMessages;
    return (validPassword);
} 
    
function address() {
    var validAddress = false;
    var errorMessages = "";
    var address = document.getElementById("Address").value;
    if (address === null || address === "") {
        errorMessages += "<p>The address is required.</p>";
    } else {
        validAddress = true;
    }
    document.getElementById("yourAddress").innerHTML = errorMessages;
    return (validAddress);
}
function city() {
    var validCity = false;
    var errorMessages = "";
    var city = document.getElementById("City").value;
    if (city === null || city === "") {
        errorMessages += "<p>The city is required.</p>";
    } else {
        validCity = true;
    }
    document.getElementById("yourCity").innerHTML = errorMessages;
    return (validCity);
}
function zipcode() {
    var validZip = false;
    var errorMessages = "";
    var zipcode = document.getElementById("ZipCode").value;
    var country = document.getElementById("Country").value;
    if (country === "USA") {
        if (zipcode.length > 5) {
            errorMessages += "<p>The zipcode is required and cannot be more than 5 characters.</p>";
        } else {
            validZip = true;
        }
// validate Zipcode according to the rules
    } else {
        validZip = true;
    }
    document.getElementById("zip").innerHTML = errorMessages;
    return (validZip);
//Zipcode is OK. For example: validZipcode = true;
}
