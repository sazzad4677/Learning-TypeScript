// a type is depended on other types
type a1 = string;
type a3 = null;
type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null ? null : a3 extends null ? null : any;

type Habibi = {
  wife1: string;
  wife2: string;
};

// check if habibi has wife1 property ? true : false
type checkProperties<T, K> = K extends keyof T ? true : false;
type check = checkProperties<Habibi, "wife1">;
type anotherExample = "Valkray" | "Anisa";
type removeProperties<T, K> = T extends K ? never : T;
type currentProperties = removeProperties<anotherExample, "Valkray">;
