class Person{
    firstName: string;
    lastName: string;
    age: number;
    greetFunction(){
        console.log('Namaste!')
    }
}

class Programmer extends Person{
    greetFunction(){
        console.log('Hello World!')
    }
    greetLikePeople(){
        super.greetFunction()
    }
    
}

var aProgrammer = new Programmer()
aProgrammer.greetLikePeople()
