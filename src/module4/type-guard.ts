//  Keyof guard
type AlphaNumeric = string | number;
function add(num1: string | number, num2: string | number): AlphaNumeric {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
}

add(12, 24);
add("12", "24");

// in guard
type AdminUserType = {
  name: string;
  role: "admin";
};
type NormalUserType = {
  name: string;
};
function getUser(user: AdminUserType | NormalUserType): string {
  if ("role" in user) {
    return `I'm an admin & my role is ${user.role}`;
  } else {
    return `I'm an Normal user`;
  }
}
const normalUser1: NormalUserType = {
  name: "ddsasd",
};
console.log(getUser(normalUser1));
const adminUser1: AdminUserType = {
  name: "asdasd",
  role: "admin",
};

console.log(getUser(adminUser1));

class Animal1 {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(` ${this.name}`);
  }
}
class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`I'm barking`);
  }
}
class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log(`I'm meowing`);
  }
}

function isDog(animal: Animal1): animal is Dog {
  return animal instanceof Dog;
}

function getAnimal(obj: Animal1) {
  if (isDog(obj)) {
    obj.makeBark();
  }
  if (obj instanceof Cat) {
    obj.makeMeow();
  } else {
    obj.makeSound();
  }
}

const animal1 = new Dog("German Shepard", "German");
const animal2 = new Cat("Persian", "German");
