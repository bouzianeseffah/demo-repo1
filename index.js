
const newListItem = document.createElement('li');
newListItem.textContent = 'coconut';
newListItem.id = 'coconut';
newListItem.style.fontWeight = 'bold'
newListItem.style.background = 'lightgreen'

//document.body.append(newListItem)
//document.getElementById('fruits').prepend(newListItem);

//document.getElementById('orange').append(newListItem);
//const orange = document.getElementById('orange');

//document.getElementById('fruits').insertBefore(newListItem, orange)


//if dont have id

const listItem = document.querySelectorAll('#fruits li ');

document.getElementById('fruits').insertBefore(newListItem, listItem[2])

document.getElementById('fruits').removeChild(newListItem)