

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

