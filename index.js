//  while loop
let loggedId = false;
let userName;
let password;


while(!loggedId){
    userName = window.prompt('enter your user name');
    password = window.prompt('enter your user password')
    if(userName === 'myUserName' && password === 'myPassword'){
        loggedId = true
        console.log('you are logged in')
    }
    else{
        console.log('invalid credentials')
    }

}

