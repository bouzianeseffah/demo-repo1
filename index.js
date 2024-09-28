
const myButton = document.getElementById('myBtn');
const myH1 = document.getElementById('myH1');
 myH1.classList.add('enabled');
// myButton.classList.add('enabled');
// myButton.classList.remove('enabled');

// myButton.addEventListener ('mouseover', event => {
//     event.target.classList.add('hover');
    
// });
// myButton.addEventListener ('mouseout', event => {
//     event.target.classList.remove('hover');
    
// })

// myButton.addEventListener ('mouseover', event => {
//        event.target.classList.toggle('hover');
        
//      });
// myButton.addEventListener ('mouseout', event => {
//             event.target.classList.toggle('hover');
            
//         });

// myButton.classList.add('enabled');

// myButton.addEventListener('click', event => {
//     if (event.target.classList.contains('disabled')) {
//         event.target.textContent += '😁'
//     }
//      else {
//         event.target.classList.replace('enabled', 'disabled');

//     }
// });


myH1.addEventListener('click', event => {
        if (event.target.classList.contains('disabled')) {
            event.target.textContent += '😁'
        }
         else {
            event.target.classList.replace('enabled', 'disabled');
    
       }
     });