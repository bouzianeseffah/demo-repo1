// forEach() : mthod used to iterate over the elements 
//             of an array
let fruits = ['banana', 'apple', 'orange', 'coconut'];

fruits.forEach(capitalize)
fruits.forEach(display);


function capitalize(element, index, array){
     array[index] = element.charAt(0).toUpperCase() + element.slice(1) ;
}


function display(element){
  console.log(element)
}