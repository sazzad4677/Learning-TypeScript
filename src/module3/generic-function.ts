// Arrow Function
const createArray = <T>(param: T): T[] => {
  return [param];
};
const result = createArray<string>("test");
