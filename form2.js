function validation(){
    var firstname=document.registration.fname;
    var lastname=document.registration.lname;
    var gname=document.registration.email;
    var number=document.registration.number;

    if(allLettername(firstname)){
        if(allLetterlast(lastname)){
            if(genderSelect(email)){
                if(Mobile(number)){

                }
            }
        }
    }
    return false;
}

function allLettername(firstname){
    var letters= /^[A-Za-z]+$/;
    if(firstname.value.length==0){
        alert('Please enter you first name');
        firstname.focus();
        return false;
    }
    else if(firstname.value.match(letters)){
        return true;
    }
    else{
        alert('First name must have alphabet characters only');
        firstname.focus();
        return false;
    }
}

function allLetterlast(lastname){
    var letters= /^[A-Za-z]+$/;
    if(lastname.value.length==0){
        alert('Please enter you last name');
        lastname.focus();
        return false;
    }
    else if(lastname.value.match(letters)){
        return true;
    }
    else{
        alert('Last name must have alphabet characters only');
        lastname.focus();
        return false;
    }
}

function Mobile(number){
    var numbers= /^[0-9]+$/;
    if(number.value.length==0){
        alert('Please enter your phone number');
        number.focus();
        return false;
    }
    else if(number.value.match(numbers)){
        return true;
    }
    else{
        alert('Phone number can only have numerical values');
        number.focus();
        return false;
    }
}

function price(){
    document.getElementById("text").innerHTML = "Price before discount: $71.88";
    document.getElementById("text2").innerHTML = "Price after discount: $57.50";
}
