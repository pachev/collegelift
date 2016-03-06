var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var name = "Pedro Ramirez";

    if ( username == "evera008@fiu.edu" && password == "1234"){
    window.location = "DriverUser.html"; // Redirecting to other page.
    return false;
    }
    if ( username == "hey@fiu.edu" && password == "1234"){
    window.location = "loginUser.html"; // Redirecting to other page.
    return false;
    }
    else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }
}