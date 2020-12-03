function isPalindromo(str){
    str.replace(' ', '')
    let ward = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] !== str[str.length-1-i]){
            ward++
        }
    }
    if(ward === 0){
        return true
    }else{
        return false
    }
}
function multiplo7(arrNumbers){
    return arrNumbers.filter(number => number % 7 === 0 )
}
function getPersonNameAndAge(personObj){

    return {
        name: personObj.name,
        age: personObj.age
    }
}
function getPersonPublic(personObj){

    delete personObj.employed
    delete personObj.dni
    return personObj;
}
(async () => { 
    const getTodos = () => { 
    return fetch('https://jsonplaceholder.typicode.com/todos/') 
    .then(response => response.json()) 
    .then(json => console.log(json)) 
    .catch(error => console.log(error)); 
    } 
    await getTodos();
})();