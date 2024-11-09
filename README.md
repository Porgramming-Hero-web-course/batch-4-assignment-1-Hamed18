
## Union Types

A **Union Type** in TypeScript allows a variable to be one of multiple specified types. It is defined using the pipe (`|`) symbol, which combines different types into one. This allows you to handle different data types with ease.

### Syntax:
```typescript
let value: string | number;
```

In the above example, the `value` variable can either be of type `string` or `number`.

### Example: Union Type

```typescript
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);          // Output: Your ID is: 101
printId('ABC123');     // Output: Your ID is: ABC123
```
---

## Intersection Types

An **Intersection Type** in TypeScript is the opposite of a Union Type. It allows you to combine multiple types into one. A value of an intersection type must satisfy all the conditions of each type in the intersection, meaning it must have all the properties and methods of each type.

### Syntax:
```typescript
let employee: Person & Employee;
```
### Example: Intersection Type

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  company: string;
  position: string;
}

function createEmployee(person: Person & Employee) {
  console.log(`${person.name} works as a ${person.position} at ${person.company}.`);
}

const newEmployee = {
  name: "Alice",
  age: 30,
  company: "Tech Corp",
  position: "Software Engineer",
};

createEmployee(newEmployee);  // Output: Alice works as a Software Engineer at Tech Corp.
```
