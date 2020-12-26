"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World by Shrey!";
/*
 tsc main,ts
 node main
*/
console.log(message);
var x = 10;
/*
  1.let and const are used a lot in ts.
  2.TS gives block level scope as well while js only has global or functional scope
  3.let can be declared without initialization while const requires a value
*/
//I.Variable Types
var isTrue = true;
var age = 20;
var name = 'Shrey';
var sentence = "My name is " + name + "\nI am " + age + " years old";
console.log(sentence);
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var tuples = [12, 'Shrey', true];
console.log(array1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Shrey';
var myVariable = 10;
myVariable.toUpperCase;
/*
1.Helps in static type checking
2.IntelliSense
*/
//II.Type Inference
/*
Take place when initializing variables only
*/
var multitype; //Has intelisense of bool and number
var randamo; //Doesnot has intelisense support
///III.Functions
function addNum(num1, num2) {
    return num1 + num2;
}
function fullName(person) {
    console.log(person.firstName + " " + person.secondName);
}
var per = {
    firstName: "Bruce",
    secondName: "Wayne"
};
fullName(per);
//V.Classes
/* Supports Object Oriented Class based approac
 */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greeting = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Shrey');
emp1.greeting();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Work in PRogress~!');
    };
    return Manager;
}(Employee));
var man = new Manager('Babu');
man.delegateWork();
man.greeting();
