

function input_placeholder(key){
 var inp=document.querySelectorAll('.loginPage__form__input')[key].value
 if(inp.length>0){
document.querySelectorAll('.loginPage__form__placeholder')[key].style="display:block"

 }else{
    document.querySelectorAll('.loginPage__form__placeholder')[key].style="display:none"
 }
}

function parol_action(key,input,icon) {
   
 if(key==0){
    console.log("asdasd1");
document.querySelectorAll('.loginPage__form__eyes .fa-eye')[icon].style="display:none"
document.querySelectorAll('.loginPage__form__eyes .fa-eye-slash')[icon].style="display:block"
document.querySelectorAll('.loginPage__form__input')[input].type="text"

 }else{
    console.log("asdsad2");
document.querySelectorAll('.loginPage__form__eyes .fa-eye')[icon].style="display:block"
document.querySelectorAll('.loginPage__form__eyes .fa-eye-slash')[icon].style="display:none"
document.querySelectorAll('.loginPage__form__input')[input].type="password"

 }
}
function data_plus() {
    var value1=document.querySelector('#phone-input').value
    if (value1.length === 0) {
    value1 = '+7 ' + value1;
  } 
  document.querySelector('#phone-input').value=value1
  }
const phoneInput = document.querySelector('#phone-input');
let isFirstDigitAdded = false;

phoneInput.addEventListener('keydown', function(e) {
  var value=document.querySelector('#phone-input').value
if(e.key!="Backspace"){
  if (value.length === 0 || value.length<3) {
    value = '+7 '
  } else if (value.length === 6) {
    value = value.slice(0, 6) + ' ' + value.slice(6);
  } else if (value.length === 10) {
    value = value.slice(0, 10) + ' ' + value.slice(11);
  } else if (value.length === 13) {
    value = value.slice(0, 13) + '-' + value.slice(14);
  }  else if (value.length === 16) {
    value = value.slice(0, 15) 
  }
  phoneInput.addEventListener('keypress', function(e) {
  const allowedChars = /[\+\(\)\d]/;
  if (!allowedChars.test(e.key)) {
    e.preventDefault();
  }
});
  
  this.value = value;

}

});

function checkUserName(){
  var name=document.querySelector('#username').value
  if(name.length>3){
 
    document.querySelector("#username").style="color:grey"
document.querySelector(".correct_bor__1").style="display:none"

  }
     
}

function checkUserEmail(){
  var email=document.querySelector('#email').value
  if(email.includes("@gmail.com")){
    document.querySelector("#email").style="color:grey"
    document.querySelector(".correct_bor__2").style="display:none"
  }   
}
function checkUserPhone(){
  var phone=document.querySelector('#phone-input').value
  if(phone.length==16 ){
    document.querySelector("#phone-input").style="color:grey"
    document.querySelector(".correct_bor__3").style="display:none"
  }   
}
function checkUserParol(){
  var parol=document.querySelector('#parol').value
  if(parol.length>6 ){
    document.querySelector("#parol").style="color:grey"
    document.querySelector(".correct_bor1").style="display:none"
  }   
}

function checkUserRepitParol(){
  var parol=document.querySelector('#parol').value
  if(parol==repit__parol){
    if(parol.length>6 ){
      document.querySelector("#parol").style="color:grey"
    }
     document.querySelector("#repit__parol").style="color:grey" 
  }   
}

function checkUsercheckbox(params) {
  if (params==1) {
    if(document.querySelector("#chacked__1").checked){
      document.querySelectorAll(".loginPage__form__checkbox__div__p")[1].style="color:grey" 
    }
   
  }else{
    if(document.querySelector("#chacked__2").checked){
      document.querySelectorAll(".loginPage__form__checkbox__div__p")[2].style="color:grey" 
    }
  }
}

function RegisterUser(){
  var name=document.querySelector('#username').value
  var email=document.querySelector('#email').value
  var phone=document.querySelector("#phone-input").value
  var parol=document.querySelector("#parol").value
  var repit__parol=document.querySelector("#repit__parol").value
  var chacked__1=document.querySelector("#chacked__1").checked
  var chacked__2=document.querySelector("#chacked__2").checked

  
  console.log(phone.length);
  if(name.length>3 && email.includes("@gmail.com") && phone.length==16 && parol==repit__parol && parol.length>6 && chacked__1 && chacked__2 ){
alert("регистрировать ")
  }else{
    if(name.length<=3){
// document.querySelectorAll(".loginPage__form__input_big")[2].style="border-color:red"
document.querySelector("#username").style="color:red"
document.querySelector(".correct_bor__1").style="display:block"
    }else{
    document.querySelector("#username").style="color:grey"
    document.querySelector(".correct_bor__1").style="display:none"
    }
    if(!email.includes("@gmail.com")){
document.querySelector("#email").style="color:red"
document.querySelector(".correct_bor__2").style="display:block"
    }else{
    document.querySelector("#email").style="color:grey"
    document.querySelector(".correct_bor__2").style="display:none"
    }
    if(phone.length!=16){
document.querySelector("#phone-input").style="color:red"
document.querySelector(".correct_bor__3").style="display:block"
    }else{
    document.querySelector("#phone-input").style="color:grey"
    document.querySelector(".correct_bor__3").style="display:none"
    }
    if(parol!=repit__parol){
      document.querySelector("#repit__parol").style="color:red"
      document.querySelector("#parol").style="color:red"

    }else{
      document.querySelector("#repit__parol").style="color:grey"
      document.querySelector("#parol").style="color:grey"

    }
    if(parol.length<=6){
      document.querySelector("#parol").style="color:red"
 document.querySelector(".correct_bor1").style="display:block"
    }else{
      document.querySelector("#parol").style="color:grey"
 document.querySelector(".correct_bor1").style="display:none"
    }
    if(!chacked__1){
   document.querySelectorAll(".loginPage__form__checkbox__div__p")[1].style="color:red"
    }else{
      document.querySelectorAll(".loginPage__form__checkbox__div__p")[1].style="color:grey"

    }
    if(!chacked__2){
      document.querySelectorAll(".loginPage__form__checkbox__div__p")[2].style="color:red"
     
    }else{
      document.querySelectorAll(".loginPage__form__checkbox__div__p")[2].style="color:grey"

    }
  }

}

