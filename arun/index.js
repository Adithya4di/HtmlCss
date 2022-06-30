function check(){
  nameCheck();
  lastName();
  emailCheck();
  passwordCheck();
}

function nameCheck(){
  var name = document.getElementById("names").value;
  if(name === ""){
    $("#names").css("border","2px solid  hsl(0, 100%, 74%)");
    $("#name").text("name cant be empty");
  }
  else{
    $("#names").css("border","2px solid  hsl(154, 59%, 51%)");
    $("#name").text("");
  }

}

function lastName(){
  var last = document.getElementById("lastName").value;
  if(last === ""){
    $("#lastName").css("border","2px solid  hsl(0, 100%, 74%)");
    $("#last").text("cant be empty");
  }
  else{
    $("#lastName").css("border","2px solid  hsl(154, 59%, 51%)");
    $("#last").text("");
  }
}

function emailCheck() {

  var text = document.getElementById("mail").value;
  if (validateEmail(text)) {
    var change = document.getElementById("mail");
    change.style.border = "2px solid hsl(154, 59%, 51%)";
      $("#email").text("");
  }
  else {
    var change = document.getElementById("mail");
    change.style.border = "2px solid hsl(0, 100%, 74%)";
    $("#email").text("Please enter valid email id");
  }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function passwordCheck(){
  var last = document.getElementById("password").value;
  if(last === ""){
    $("#password").css("border","2px solid  hsl(0, 100%, 74%)");
    $("#pass").text("password cant be empty");
  }
  else{
    $("#password").css("border","2px solid  hsl(154, 59%, 51%)");
    $("#pass").text("");
  }
}
