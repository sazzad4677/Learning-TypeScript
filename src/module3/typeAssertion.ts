let emni: any;
emni = "habijabi";
const stringLengthByAssertion: number = (emni as string).length;
const anotherWayToDeclareAssertion: number = (<string>emni).length;
console.log({ stringLengthByAssertion });

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `the converted result is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}
const resultToNumber = kgToGram(1000) as number;
const resultToString = <string>kgToGram("1000");
type CustomErrorType = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
