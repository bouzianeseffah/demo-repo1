//switch case
/*let day = 'j' ;
switch(day) {
     case 1: 
     console.log('it is moday')
     break;
     case 2: 
     console.log('it is tuesday')
     break;
     case 3: 
     console.log('it is whensday')
     break;
     case 4: 
     console.log('it is thursday')
     break;
     case 5: 
     console.log('it is friday')
     break;
     case 6: 
     console.log('it is saturday')
     break;
     case 7: 
     console.log('it is sunday')
     break;
     default :
     console.log(`${day} is not a day`)
}*/

let testScor = 50;
let letterGrade;

switch(true) {
    case testScor >= 90:
    letterGrade = 'A'
    break
    case testScor >= 80:
    letterGrade = 'B'
    break
    case testScor >= 70:
    letterGrade = 'C'
    break
    case testScor >= 60:
    letterGrade = 'D'
    break
    default:
        letterGrade = 'F'
}
console.log(letterGrade)
