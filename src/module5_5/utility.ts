interface Person {
  name: string;
  email: string;
  contactNo: string;
}

type Contact = Pick<Person, "contactNo" | "email">;
// Omit
type Name = Omit<Person, "email">;

// Partial & Required
//  To Make all the properties optional type
type Optional = Partial<Person>;
type Require = Required<Person>;

const person: Readonly<Person> = {
  name: "John",
  email: "john@gmail.com",
  contactNo: "sad",
  //   takeNap() {},
};

// type myObj = {
//     [key: string]: string;
// }
type myObj = Record<"a" | "b", string>;
const obj: myObj = {
  a: "1",
  b: "1",
  // c: "1" // Type '{ a: string; b: string; c: string; }' is not assignable to type 'myObj'
};
