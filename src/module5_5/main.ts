import { addFunc as add } from "./module";
const addFunc = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};

add(12, 12, 12);
