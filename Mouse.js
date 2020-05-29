function Mouse(name){
	this.name = name;
	this.dead = true;	
}

Mouse.prototype.die = function(){
	this.dead = false;
}

module.exports = Mouse;