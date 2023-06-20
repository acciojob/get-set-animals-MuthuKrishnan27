//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	getter(){
		return this.species;
	}
	makeSound(){
		if(species===Dog){
			return Dog.bark();
		}
		else{
			return Cat.purr();
		}
	}
}

class Dog extends Animal {
	constructor(){
		super("Dog");
	}
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor(){
		super("Cat");
	}
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
