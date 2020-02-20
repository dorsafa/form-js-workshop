
function validInput(){
    let form =document.querySelector("form")
let name = document.getElementById("name").value;
let adress=document.getElementById("adress").value;
let mail=document.getElementById("email").value;
let password=document.getElementById("password").value;
let regex2 = new RegExp('\\w+');

    if (name ==="") alert("Name is empty");
    if (adress==="") alert("Adress is empty");
    if (mail ==="") alert("Email is empty");
    if (password==="") alert("password is empty");

    if (mail.indexOf("@")<0 ) alert("Invalid Mail");

    if (password.length<8) alert("The password must have more than 8 characters");

    if (password!== /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ ) alert("The password must be a combination of charatacters , numbers and at least a capital letter");

}

document.getElementById("submit").addEventListener("click", validInput);

