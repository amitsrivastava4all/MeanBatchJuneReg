function doLogin(){
    var userid=document.getElementById("userid").value;  // Value come from the Text Box
    var pwd=document.getElementById("password").value;
    var message = "";
    if(userid == pwd){
        location.href="dashboard.html";
        // redirect to dashboard page
    }
    else{
        message = "Invalid Userid or Password";
        document.getElementById('error').innerText=message;
        // print message on Screen
    }
}