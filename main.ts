export {}
let message = "Hello World by Shrey!"

/*
 tsc main,ts
 node main
*/

console.log(message);
let x=10
/*
  1.let and const are used a lot in ts.
  2.TS gives block level scope as well while js only has global or functional scope
  3.let can be declared without initialization while const requires a value
*/


//I.Variable Types
let isTrue : boolean = true;
let age: number = 20;
let name: string = 'Shrey';
let sentence: string = `My name is ${name}
I am ${age} years old`;
console.log(sentence);
let array1: number[] = [1,2,3];
let array2: Array<number> = [1,2,3]
let tuples: [number,string,boolean] = [12,'Shrey',true]
console.log(array1);

enum Color {Red,Yellow,Green};
let c: Color = Color.Red;
console.log(c);

let randomValue: any = 10;
randomValue = true
randomValue = 'Shrey'

let myVariable: unknown = 10;
(myVariable as string).toUpperCase;

/*
1.Helps in static type checking
2.IntelliSense 
*/

//II.Type Inference
/*
Take place when initializing variables only
*/
let multitype : boolean | number; //Has intelisense of bool and number
let randamo: any; //Doesnot has intelisense support


///III.Functions
function addNum(num1 :number,num2?: number){
    return num1+num2;
}
/*
console.log(addNum('2',3));  //Throws Error
console.log(addNum(2,3));  //Works Fine
*/

/*
In JS it is possible to call function without parameter
But this will cause error in TS
*/

// IV.Interfaces
/*
Possible to specify an object as a type in ts
*/
interface personName{
    firstName: string,
    secondName: string
}
function fullName(person: personName){
   console.log(`${person.firstName} ${person.secondName}`);
}
let per = {
    firstName: "Bruce",
    secondName: "Wayne"
}
fullName(per);

//V.Classes
/* Supports Object Oriented Class based approac
 */
class Employee{
    employeeName: string
    constructor(name: string){
        this.employeeName = name
    }
    greeting(){
        console.log(`Hello ${this.employeeName}`);
    }
}
let emp1 = new Employee('Shrey');
emp1.greeting();
class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log('Work in PRogress~!');
    }
}
let man = new Manager('Babu');
man.delegateWork();
man.greeting();


// VI.Access Modifiers
/* Set accessibility of things in class, public private protected
default: public
private: cant be accessed, even by children
protected: when we want access to base class but base shudnt be accessed by others
*/