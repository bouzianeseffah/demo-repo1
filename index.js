//RANDOM PASSWORD GENERATOR
function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbols ){
          const lowercaseCharts = 'abcdefghijlmnopqkutwszx';
          const uppercaseCharts = 'ABCDEFGHIJKOPQLMNKUTSWZX';
          const numberCharts = '0123456789';
          const symbolCharts = '@$!%$*()_+^-=';
          let allowedCharts = '';
          let password = '';
          allowedCharts += includeLowercase ? lowercaseCharts : '';
          allowedCharts += includeUppercase ? uppercaseCharts : '';
          allowedCharts += includeNumber ? numberCharts : '';
          allowedCharts += includeSymbols ? symbolCharts : '';
          //console.log(allowedCharts)
          if(length <= 0){
            return `(password length must be at least 1)`
          }
          if(allowedCharts.length === 0) {
            return `(at least 1 set of character needs to be selected)`;
          }
          for (let i = 0; i < length; i++) {
              const randomIndex =Math.floor (Math.random() * allowedCharts.length);
              password += allowedCharts[randomIndex]
          }
         

           return password;
}
const paswordLength = 12;
const includeLowercase = true;
const inclideUppercase = true;
const includeNumber = true;
const includeSymbols = true;


const password =  generatePassword(paswordLength, includeLowercase,
                                   inclideUppercase,
                                   includeNumber, includeSymbols);

                                   
console.log(`generated password: ${password}`)                                   