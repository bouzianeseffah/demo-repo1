const myBox = document.getElementById('myBox');

const myButton = document.getElementById('myButton')
myButton.addEventListener('click', event => {
    //console.log(event)
    myBox.style.backgroundColor = 'red';
    myBox.textContent =  'OUCH! 😣';
} );

myButton.addEventListener('mouseover', event =>{
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent =  "Don't do it 😥";
} );
myButton.addEventListener('mouseout', event => {
    myBox.style.backgroundColor = 'lightgreen';
    myBox.textContent =  "Click me 😊";
});