/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//literal

const person = 
{
    name: "ahmed",
    age : 31
}
console.log(person.name , person.age);

//constructor function

function facilityMember(name,age) 
{
    this.name = name;
    this.age = age;
}
let member= new facilityMember ("ahmed",31);
console.log(member.name, member.age);

//es6 class
class company 
{
    name
    age
    constructor (name,age)
    {
        this.name = name
        this.age = age
    }
}
let emp = new company ('ahmed',31)
console.log(emp.name, emp.age);

//++with object keyword

let man = new Object();
man.name = "ahmed"
man.age = 31
console.log(man.name, man.age);



