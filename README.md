One of the most powerful features of TypeScript is using union types and intersection types. These types allow developers to describe complex data structures in an easier way.

What Are Union Types?
A Union Type in TypeScript allows a variable to be one of multiple specified types. It is defined using the pipe (|) symbol, which combines different types into one. 
Ex: let value: string | number;

What Are Intersection Types?
An Intersection Type in TypeScript is the opposite of a Union Type. It allows you to combine multiple types into one, meaning that a value of an intersection type must satisfy all of the conditions of each type in the intersection.
Ex: let employee: Person & Employee;


Example :
// union
function printId(id: number | string) {  
  console.log(`Your ID is: ${id}`);
}
printId(101);         
printId('ABC123');     


// intersection
interface Person {
  name: string;
  age: number;
}

interface Employee {
  company: string;
  position: string;
}

function createEmployee(person: Person & Employee) {
  console.log(`${person.name} work as a ${person.position} at ${person.company}.`);
}
const newEmployee = {
  name: "Alice",
  age: 30,
  company: "Tech Corp",
  position: "Software Engineer",
};

createEmployee(newEmployee); 


