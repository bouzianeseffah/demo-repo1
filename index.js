//string methods


let userName =' boz';
let result = userName.startsWith(' ');
if(result){
    console.log("your userName cant begin with ' '")
}else{
    console.log(userName)
}


userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.repeat();
console.log(userName)
console.log(userName.charAt(0));
console.log(userName.indexOf('b'));
console.log(userName.indexOf('p'));
console.log(userName.length);
