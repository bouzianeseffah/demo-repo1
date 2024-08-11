const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;


mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age)
    if (age >= 100) {
        resultElement.textContent = `you are too old to enter this site`
    } else if (age == 0){
        resultElement.textContent = `you were just born`
    }else if (age >= 18 ) {
        resultElement.textContent = `you old enough to enter`

    }else if (age < 0) {
            resultElement.textContent = `your age cant be below`
    }else {
        resultElement.textContent = `you mast 18+ to enter`
    }
}

