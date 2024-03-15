function isValid() {
    if (name() && email() && comments()) {
        return true;
    } else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

function name(){
    //1) Create variable
    var validName=false;

    //2) read value from HTML
    var name = document.getElementById("Name").value;
    var errorMessages = "";

    //3) Do validation
    if (name==="null" || name==="" ) {
        errorMessages += "<p>Your name is required</p>";
        } else if (name.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Name invalid — bad characters")
        } else {
                validName = true;
                console.log("Name valid");
        }

    //4) Send error message to HTML
    document.getElementById("fullName").innerHTML = errorMessages;

    //5) return status of each field
    return (validName);
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

function comments(){
  var validComment=false;
  var comment=document.getElementById("Comment").value;
  var errorMessages="";
  if (comment===null || comment==="") {
    errorMessages += "Comments are required.";
  } else {
    validComment=true;
  }
  document.getElementById("comments").innerHTML = errorMessages;
  return (validComment);
}
