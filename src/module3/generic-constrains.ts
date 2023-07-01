type MyInfoType = {
  name: string;
  salary: number;
  age: number;
};
const myInfo: MyInfoType = {
  name: "sadsa",
  salary: 980,
  age: 90,
};

interface IMandatoryField {
  name: string;
  salary: number;
  age: number;
}

// Arrow Function
const createGenericConstrains = <T extends IMandatoryField>(param: T): T[] => {
  return [param];
};
const result2 = createGenericConstrains<IMandatoryField>(myInfo);

type PersonType = {
  name: "name";
  age: 30;
  salary: 50;
};
type newType = "name" | "age" | "salary";
type newTypeUsingKeyOf = keyof PersonType;

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "sadas", age: "sadasd" }, "age");
