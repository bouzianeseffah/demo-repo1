let buttons = document.querySelectorAll('.myBtns');
//NodeList
//console.log(buttons)


//add HTML/CSS properties
// buttons.forEach(button => {
//     button.style.backgroundColor = 'green';
//     button.textContent += '😁'

// })


// CLICK event listener
// buttons.forEach(button => {
//    button.addEventListener('click' , event => {
//       event.target.style.backgroundColor = 'red'
//    })
// })

//mouseover, mouseout
// buttons.forEach(button => {
//     button.addEventListener('mouseover' , event => {
//         event.target.style.backgroundColor = 'red'
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener('mouseout' , event => {
//         event.target.style.backgroundColor= 'rgb(173, 173, 247)';

//     });

//add an Element

// const newButton = document.createElement('button');
// newButton.textContent = 'Button5';
// newButton.classList = 'myBtns';
// document.body.appendChild(newButton);
// console.log(buttons);// only 4 button 
// buttons = document.querySelectorAll('.myBtns')

// console.log(buttons)//5 buttons

//remove an element

buttons.forEach(button => {
    button.addEventListener('click', event => {
        event.target.remove();
        //console.log(buttons)//style 4 buttons
        buttons = document.querySelectorAll('.myBtns')
        console.log(buttons) 
    })
})
