
try{
    
const dividend =Number (window.prompt('enter a dividend:'));
const divisor = Number (window.prompt('enter a divisor:'));
if(divisor == 0){
  throw new Error ('you cant divide by zero!')
}
if (isNaN(dividend )|| isNaN(divisor)) {
    throw new Error('values must be a number')
    
}
const result = dividend / divisor;
console.log(result)
}
catch(error){
    console.error(error)

}
console.log('hou have reached the end')