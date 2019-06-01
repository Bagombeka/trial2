

function validate(){

	var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var gender=document.getElementById("gender").value;
	var password=document.getElementById("password").value;
	var cpassword=document.getElementById("confirmpassword").value;
  
if(password != cpassword){
		alert('passwords dont match');
		return false
		
	}else

	if(password.length<6){
		alert('password cant be less that 6 letters');
		document.getElementById("password").style.backgroundColor = "red";
		document.getElementById("password").focus();
		return false;
	}

	
	
return true;
}



function values(){
/*var parameters=location.search.substring(1).split("&");
var temp=parameters[0].split("=");
name=unescape(temp[1]);
temp=parameters[1].split("=");
email=unescape(temp[1]);
 temp=parameters[2].split("=");
gender=unescape(temp[1]);
 temp=parameters[3].split("=");
password=unescape(temp[1]);*/

 var name=document.getElementById("name").value;
 var email=document.getElementById("email").value;
 var gender=document.getElementById("gender").value;
 var password=document.getElementById("password").value;
 var cpassword=document.getElementById("confirmpassword").value;


document.getElementById("name1").innerHTML=name;
document.getElementById("email1").innerHTML=email;
document.getElementById("gender1").innerHTML=gender;
document.getElementById("password1").innerHTML=password;

return true;

}





