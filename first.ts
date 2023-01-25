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
  ADMIN = 4 ,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: " Sazzad",
  age: 30,
  Permissions: Role.ADMIN,
};
