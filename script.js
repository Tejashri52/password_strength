function measureStrength(){

let passwordelem = document.getElementById('password-input');

let strengthelem = document.getElementById('strength-level');

let strengthlevel = 'weak';
let password = passwordelem.value;

var numberregrex = /\d/
if(numberregrex.test(password)){
if((password.length >=8)&&(password.length < 12)){
  strengthlevel = 'Moderate';

  }
else if(password.length >=12){
  strengthlevel = 'strong';
}
}
else{
  strengthlevel = 'weak';
}

strengthelem.className = strengthlevel.toLowerCase().replace(' ', '-');
strengthelem.innerText = strengthlevel;

}
