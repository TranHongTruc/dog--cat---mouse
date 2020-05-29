var chalk = requiere('chalk');

function Dog(name, age){
	this.name = name;
	this.age = age;
	this.stomach = [];
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}

Dog.prototype.sayHi = function(){
	console.log('Hi! My name is '+ chalk.blue('this.nam'));
}

module.exports = Dog;