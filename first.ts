const f = "a";
console.log("aaa", f);

interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "John",
  age: 30,
  getMessage() {
    return "hello";
  },
};
const user2: UserInterface = {
  name: "Jhon",
  getMessage() {
    return "hello";
  },
};

console.log(user.getMessage());

let userName: string = "alex";
let newUserName: string | number = 2;

/*
 * Example_Object_Type
 */
const objectType: {
  name: string;
  age: number;
} = {
  name: "Sazzad",
  age: 30,
};
console.log(objectType);

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);

/*
 * Example of array type
 */
let hobbies: string[] = ["Playing Games"];
/*
! hobbies = "Playing Games"
That will throw an error because we say array of string
! hobbies = ["Playing Games", 1]
That also an error because in avobe we say it's array of strings, not number
*/
console.log(hobbies);

/*
 * Example of Tuples
 */

const productTuple: {
  id: string;
  price: number;
  tags: [string, string, number]; // tuples
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new", 3], // tuples
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
// productTuple.tags[1] = 3 // that will throw an error
productTuple.tags.push("admin");
console.log(product);

/*
 * Example of ENuM
 */
enum Role {
  ADMIN = 4,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: " Sazzad",
  age: 30,
  Permissions: Role.ADMIN,
};
/*
 * Example of Union Types
 */

function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "string" && typeof n2 === "string") {
    result = n1.toString() + n2.toString();
  }
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  }
  return result;
}

const combinedAges = combine(1, 2);
console.log(combinedAges); //  3

const combinedNames = combine("a", "b");
/*
 * Example of literal Types
 */
function literalTypes(params: "as-number" | "as-text") {
  if (params === "as-number") {
    return 1;
  }
  return (1).toString();
}
const convertNumber = literalTypes("as-number"); // 1
const convertText = literalTypes("as-text"); // "1"

/*
 * Example of type aliases
 */
type Combinable = number | string;

function typeAlias(params: Combinable) {
  return params;
}

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
/*
 * Example of function return types and void
 */
function add(n1: number, n2: number): number {
  return n1 + n2;
}
function printResult(params: number): void {
  // void will be used as function doesn't have any returns, so instead of using undefined void will be used as function type
  console.log("Result: " + params);
}
/*
 * Example of function types
 */

let funcType: Function;
funcType = add;
// funcType = 5;
let anotherWay: (a: number, b: number) => number;
anotherWay = add;
// anotherWay = printResult => this will throw an error

/*
 * Example of unknown types
 */
let userInput: unknown;
userInput = 5;
userInput = "hello world";
