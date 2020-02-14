/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(name,age,location,favColor) 
{
    this.name=name;
    this.age=age;
    this.location=location;
    this.favColor=favColor;
}
let person = new objectProperties("ahmed",31,"astoria","blue")
console.log(`The Name is   : ${person.name} \nThe Age       : ${person.age}\nThe Location  : ${person.location}\nThe Color     : ${person.favColor}`);
 