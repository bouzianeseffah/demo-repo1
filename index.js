//.checked = property that determines the checked state of an HTML checkedbox or radio element
const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCard = document.getElementById('masterCardBtn');
const payBalBtn = document.getElementById('payBalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');
mySubmit.onclick = function() {
    if(myCheckBox.checked){
        subResult.textContent = `you are suscribed`

    }else{
        subResult.textContent = `you are NOT suscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with visa`
    }
    else if (masterCard.checked) {
        paymentResult.textContent = `you are paying with MasterCard`;
    }
    else if (payBalBtn.checked){
        paymentResult.textContent = `you are paying with PayBall`;

    }
    else{
        paymentResult.textContent = `you must select payment type`;

    }
}





