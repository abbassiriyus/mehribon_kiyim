

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