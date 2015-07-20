/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
};

//Create an Array called 'users' that will store all our instances of User.

  //code here
var user = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
user.push(new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'),
  new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'),
  new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup'));


console.log('Tyler\'s information is ');
//Console.log all of Tylers information

  //code here
console.log('name is: ' + user[0].name + ' Email is: ' + user[0].email + ' PW is: ' + user[0].pw);

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here
console.log('name is: ' + user[2].name + ' Email is: ' + user[2].email + ' PW is: ' + user[2].pw);


//Now create another instance of User using your own information and then add that to your users array.

  //code here
user.push(new User('Braxton', 'braxton.christensen@gmail.com', 'iAlsoLoveJS'));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 

  //code here
user.forEach(function(name, i){
  console.log(user[i].name);
});
