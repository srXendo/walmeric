const regexName = /^[a-zA-Z ]+$/
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
function validateAndSend(){
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    if(!regexName.test(name.value)){
        modifyClassError('name', 'err')
    }else{
        modifyClassError('name', 'noRender')
    }
    if(!regexEmail.test(email.value)){
        modifyClassError('email', 'err')
    }else{
        modifyClassError('email', 'noRender')
    }
    if(!regexPhone.test(phone.value)){
        modifyClassError('phone', 'err')
    }else{
        modifyClassError('phone', 'noRender')
    }
    if(document.getElementsByClassName('err').length === 0 ){
        alert('enviando formulario...')
        /*sendRequest({
            name: name.value,
            email: email.value,
            phone: phone.value
        })*/
    }else{
        alert('revisa los campos')
    }
}
function modifyClassError(idName, className){
    document.getElementById(`err_${idName}`).setAttribute('class', className);
}
function sendRequest(obj){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://localhost/");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(obj));
}