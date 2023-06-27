type User = {
  name: string;
  age: number;
};

type ExtendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendUser extends IUser {
  role: string;
}

const user: IExtendUser = { name: "IExtendUser", age: 30, role: "IExtendUser" };

// const userWithTypeAlias: User = {
//   name: "type alias",
//   age: 30,
// };
// const userWithInterface: IUser = {
//   name: "interface",
//   age: 30,
// };

type AddNumbersType = (num1: number, num2: number) => number;
interface IAddNumbersInterface {
  (num1: number, num2: number): number;
}

type ArrayType = number[];

interface IArrayType {
  [index: number]: number;
}
