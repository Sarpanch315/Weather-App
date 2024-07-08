/*class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Welcome ${this.name}`);
    }
}
p1 = new Person("Ram",56);
p2 = new Person("Shyam",52);*/


class Mamal {
    constructor(name){
        this.name = name ;
        this.type = "Warm-blodeed"
    }
    eat(){
        console.log("I am eating");
    
    }
}

class Dog extends Mamal{
    constructor(name){
        super(name);
    }

    bark(){
        console.log("woff");
    }
}

class Cat extends Mamal {
    constructor(name){
        super(name);
    }
    
    meow(){
        console.log("Meow - Meow");
    }

}
