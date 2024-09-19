const form = document.querySelector("contactUs");
form.addEventListener("submit", submitForm);

function checkNum(phone){
    for(var i = 0;i < phone.length; i++){
        if(isNaN(phone[i])){
            return false;
        }
    }

    return true;
}

function showDialog(){
    // prompt untuk get value
    // var name = prompt("What is your name?")
    // console.log(name)

    //confirm -> untuk konfirmasi

    var result = confirm("Are u sure?")
    if(result){
        alert("success!!")
        console.log("Success")
    }else{
        console.log("Not success")
    }
}

function submitForm(event){
    event.preventDefault();
    var fullName = document.getElementById("fullnameTxt").value
    var email = document.getElementById("emailTxt").value
    var phoneNumber = document.getElementById("phone-number").value
    var ramen = document.getElementById("ramen").checked
    var dryRamen = document.getElementById("dry-ramen").checked
    var checkbox = document.getElementById("newsletter").checked

    if(fullName.length == 0){
        alert("Full Name must be filled")
    } else if(email.indexOf("@") == -1){
        alert("Email must contain @")
    
    }else if(phoneNumber.length < 12 || !checkNum(phoneNumber)){
        alert("Phone must be numeric or must be at least 12 digits")
    }else if(!ramen && !dryRamen){
        alert("ramen preference must be filled")
    }else if(!checkbox){
        alert("Newsletter must be filled")
    }else{
        showDialog();
       
    }

    
}

