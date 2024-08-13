// logical operator = used to combine or manipulate
// boolean value(true or false)
//        AND = &&
//        OR = ||
//        NOT = !


const temp = 250;

//&&
if(temp > 0 && temp <= 30) {
    console.log('the weather is good')
}


else{
    console.log('the weather is bad')
}
//||
if(temp <= 0 || temp > 30) {
    console.log('the weather is bad')
}


else{
    console.log('the weather is good')
}

//!
const isSunny = true;
if(!isSunny) {
    console.log('it is sunny');

}else{
    console.log('it is cloudy')
}


