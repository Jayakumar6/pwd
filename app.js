var password = document.getElementById("password1");

function genPassword(){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    var passwordLength = 12;
    for(var i=0;i<=passwordLength;i++) {
        var randomNum = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNum,randomNum +1);
    }
    document.getElementById("password1").value=password;
    console.log(password);
}

function copyPassword(){
    text = document.getElementById("password1");
    text.select();
    alert("Text Copied");
}