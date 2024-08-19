// Dice Roller program

function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImagies = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
      const value =Math.floor( Math.random() * 6) + 1;
      //console.log(value)
      values.push(value);
      images.push(`<img src="/dice_images/${value}.png" >`)
    }
    //console.log(values)
    diceResult.textContent = `dice ${values.join(',  ')}`
    diceImagies.innerHTML = images.join('')



}
