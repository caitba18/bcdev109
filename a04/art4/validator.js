function isValid() {
    if (firstName() && lastName()) //&& email() && phone() && username() && password() && address() && city() && zipcode())
        return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
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
    document.getElementById("FirstName").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

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
    document.getElementById("LastName").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastName);
}
