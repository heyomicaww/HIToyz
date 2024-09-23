function validateData(){
    
    event.preventDefault();

    var name = document.getElementById("name-b");
    var email = document.getElementById("email-b");
    var password = document.getElementById("pass-b");
    var errorMsg = document.getElementById("errorMsg");
    var agree = document.getElementById("agree-b");

    if(name.value.length < 5){
        alert("Name must be atleast 5 characters");
    }
    else if(email.value.length==0){
        alert("Email cannot be empty");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com");
    }
    else if(password.value.length < 5){
        alert("Password must be atleast 5 characters");
    }
    else if(agree.checked == false){
        alert(" You must to Check the Terms & Conditions");
    }
    else{
        errorMsg.style.display = "none";
        alert("Success!");
        document.forms[0].submit();
    }
}