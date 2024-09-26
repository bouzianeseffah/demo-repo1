const myBox = document.getElementById('myBox');
const moveAmount = 10;
let x  =0;
let y = 0;

document.addEventListener('keydown', event => {
    myBox.textContent = '😥';
    myBox.style.background = 'red'
})
document.addEventListener('keyup', event => {
    myBox.textContent = '😁';
    myBox.style.background = 'lightgreen'
})

document.addEventListener('keydown', event => {
   //console.log(event.key)
   if(event.key.startsWith('Arrow')){
      event.preventDefault()
     switch(event.key){
        case 'ArrowUp':
            y -= moveAmount;
            break;
        case 'ArrowDown':
            y += moveAmount;
            break;
        case 'ArrowLeft' :
            x -= moveAmount;
            break;
        case 'ArrowRight' :
            x += moveAmount;
            break;          

    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
    //console.log(myBox.style.top, myBox.style.left)



   }
})
