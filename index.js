//function number is even or odd
function isEven(number) {
    if(number % 2 === 0) {
        return true
    }
    else{
      return  false
    }
}
console.log(isEven(10))


function isEven2(number) {
    return  number % 2 === 0 ? true : false
}
console.log(isEven(11))
console.log(isEven2(12))


function isValidEmail (email) {
    if(email.includes('@')){
        return true;
    }
    else{
        return false
    }

}

function isValidEmail2(email){
    return email.includes('@') ? true : false

}
console.log(isValidEmail('sdgsdbsgamil.con'))
console.log(isValidEmail2('adfvsd@gmail.com'))
