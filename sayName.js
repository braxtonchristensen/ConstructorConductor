//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
};


//Now create three instances of Person with data you make up

  //code here
var guy1 = new Person('Braxton', 21);
var gal1 = new Person('Sydney', 21);
var guy2 = new Person('Merrick', 25);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
	alert('Hello, my name is ' + this.name);
};

guy1.sayName();
guy2.sayName();
gal1.sayName();
