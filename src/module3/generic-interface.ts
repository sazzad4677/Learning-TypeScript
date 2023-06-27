// Generic Interface
interface CrushInterface<T> {
  name: string;
  husband: T;
}

const crush1: CrushInterface<boolean> = { name: "Anisa", husband: true };
const crush2: CrushInterface<string> = { name: "Anisa", husband: "hsadk" };

interface Husband {
  name: string;
}

const crush3: CrushInterface<Husband> = {
  name: "Anisa",
  husband: { name: "sadk" },
};

type GenericArray<T> = Array<T>;
const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];
const rollNumber2: GenericArray<string> = ["3", "4", "5"];

type NameRollType = { name: string; rollNumber: number };

const userRollNumber: GenericArray<NameRollType> = [
  {
    name: "John",
    rollNumber: 20,
  },
];

type GenericTuple<X, Y> = [X, Y];
const relation: GenericTuple<number, string> = [1, "22"];

type RelationWithSalaryType = { name: string; salary: number };

interface IRelationWithSalaryType {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<IRelationWithSalaryType, string> = [
  { name: "", salary: 30 },
  "sazzad",
];
