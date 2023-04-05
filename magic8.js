// short hand exercise -- creation of a magic8ball program based on user input and randomizing functions
let userName = 'Lucas';

userName ? console.log(`Hello ${userName}`) : console.log('Hello!');

let userQuestion = 'do my shoes smell?';

userName ? console.log(`\nOk ${userName},`) : console.log('\nOk,');
console.log('You want to know '+ userQuestion);

let randomNumber = Math.floor(Math.random() * 7);
let eightBall = randomNumber.toString(10);


switch (eightBall) {
  case '1':
    console.log('It is certain')
    break;
  case '2':
    console.log('It is decidedly so')
    break;
  case '3':
    console.log('Reply hazy try again')
    break;
  case '4':
    console.log('Cannot predict now')
    break;
  case '5':
    console.log('Do not count on it')
    break;
  case '6':
    console.log('My sources say no')
    break;
  case '7':
    console.log('Outlook not so good')
    break;
  case '8':
    console.log('Signs point to yes')
    break;
  default:
    console.log('Roll again')
    break;
  }