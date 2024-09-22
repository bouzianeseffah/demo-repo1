 //create the  element

 const newH1 = document.createElement('h1');

 newH1.textContent = 'i like pizza';
newH1.id = 'myH1'
newH1.style.color = 'red';
newH1.style.textAlign = 'center'
 document.body.append(newH1)
document.getElementById('box1').append(newH1)
//const box2 = document.getElementById('box2');
//document.body.insertBefore(newH1, box2)

// if box dont have id
//const boxes  = document.querySelectorAll('.box')
//document.body.insertBefore(newH1, boxes[1])


//remove html element

document.getElementById('box1').removeChild(newH1)
