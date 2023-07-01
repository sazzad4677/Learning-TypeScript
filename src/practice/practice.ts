// Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];
let userInfo: [number, string, string, boolean, undefined, string];
userInfo = [101, "Ema", "John", true, , "2023"];
/* Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array. */

function getCommonElements(arr1: number[], arr2: number[]): number[] {
  const matchedItems = arr1.filter((v1: number): number | undefined =>
    arr2.find((v2: number): boolean => v1 === v2)
  );
  return matchedItems;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 6, 8];
const commonItems = getCommonElements(arr1, arr2);
console.log(commonItems);

/* You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety. */

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

function getMatchedProduct<T, K extends keyof T>(
  products: T[],
  criterion: K,
  value: T[K]
) {
  return products.filter((product: T) => product[criterion] === value);
}

const products: IProduct[] = [
  { id: 1, name: "Toy Car", price: 10, category: "Toys" },
  { id: 2, name: "Apple", price: 1, category: "Fruits" },
];
const filteredProducts = getMatchedProduct<IProduct, "price">(
  products,
  "price",
  10
);
console.log(filteredProducts);

/* Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array. */

type Product<T extends [string, number, number]> = T[];

function calculateTotalCost<T extends [string, number, number]>(
  products: Product<T>
): number {
  const totalCost = products.reduce((acc, [name, price, quantity]) => {
    const productCost = price * quantity;
    return acc + productCost;
  }, 0);

  return totalCost;
}
const productList: Product<[string, number, number]> = [
  ["Alu", 10, 2],
  ["Pyeaz", 1, 5],
  ["Roshun", 15, 1],
];

const totalCost = calculateTotalCost(productList);
console.log(totalCost);

/* Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it? */
function sumOfEvenNumbers(arr: number[]): number {
  let total = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      return (total += element);
    }
  });
  return total;
}
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(sumOfEvenNumbers(numbers));

/* Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found. */
interface IPerson {
  name: string;
  age: number;
  email: string;
}

function matchedPerson(arr: IPerson[], email: string): IPerson | null {
  const findThePerson = arr.find(
    (person: IPerson): boolean => person.email === email
  );
  return findThePerson ?? null;
}

const persons: IPerson[] = [
  { name: "Sazzad", age: 30, email: "ssadas@gmail.com" },
  { name: "Robin", age: 20, email: "122@gmail.com" },
];
console.log(matchedPerson(persons, "ssadas@gmail.com"));

/* Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console. */
function findMinMax(...array: number[]): [number, number] {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return [min, max];
}
const numbersArr: number[] = [5, 2, 9, 1, 7];

const [min, max] = findMinMax(...numbersArr);
console.log("Min Value", min);
console.log("Max Value", max);

/* Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase. */
function colors(name: "red" | "green" | "blue", value?: boolean): string {
  if (value) {
    return name.toUpperCase();
  }
  return name.toLowerCase();
}
console.log(colors("blue", true));
console.log(colors("red"));
