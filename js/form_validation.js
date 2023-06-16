function validateForm() {
    var name = document.forms["contact_form"]["name"].value;
    var email = document.forms["contact_form"]["email"].value;
    var phone = document.forms["contact_form"]["phone"].value;
    var message = document.forms["contact_form"]["message"].value;
    var contactMethodPhone = document.getElementById("contactMethodPhone").checked;
    var contactMethodEmail = document.getElementById("contactMethodEmail").checked;

    if (name == "" ) {
      alert("Please enter your name");
      return false;
    }

    if (name.length < 3 ) {
        alert("Name has to be longer than 3 characters");
        return false;
    }
  
    if (email == "") {
      alert("Please enter your email");
      return false;
    }

    function IsValidEmail(email) {

        if (email.length < 3) {
            alert("Email too short");
            return false;
        }

        if (email.indexOf("@") == -1) {
            alert("Email has to have \'@\'");
            return false;
        }
 
        var part = email.split("@");
        var dot = part[1].indexOf(".");
        var afterDotlen = part[1].length;
        var dotSplit = part[1].split(".");
        var dotAmount = dotSplit.length - 1;
 
        if (dot == -1 || dot < 2 || dotAmount > 2) {
            alert("Email has an invalid domain");
            return false;
        }
 
        for (var i = 0; i < dotSplit.length; i++) {
            if (dotSplit[i].length == 0) {
                alert("Email has an invalid domain");
                return false;
            }
        }
 
        return true;
    }
  
    if (phone == "") {
      alert("Please enter your phone number");
      return false;
    }

    if (phone == "") {
        alert("Please enter your phone number");
        return false;
    }

    var validChars = ' +0123456789';
    var phoneNumCount = 0;
    for (var i = 0; i < phone.length; i++) {
        var char = phone[i];
        
        if (validChars.indexOf(char) === -1) {
            alert("Phone number must consist of only numbers following the format \"+XX XXX XXX XXX\".")
            return false; 
        }
        
        if (!isNaN(parseInt(char))) {
            phoneNumCount++;
        }
    }

    if(phoneNumCount<9){
        alert("Phone Number has to be 9 numbers or longer")
    }

    if (message == "") {
      alert("Please enter your message");
      return false;
    }

    var messageWordCount = 0;
    for (var i = 0; i < message.length; i++) {
        var char = message[i];
        
        if (char==" ") {
            messageWordCount++;
        }
        if (messageWordCount>3) {
            break;
        }
    }

    if(messageWordCount<3){
        alert("Message too short")
    }

  
    if (!contactMethodPhone && !contactMethodEmail) {
      alert("Please select a preferred contact method");
      return false;
    }
  
    return true;
  }
  