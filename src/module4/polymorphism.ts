class Person {
  takeNap() {
    console.log(`I'm sleeping 8 Hours per day`);
  }
}

class Man extends Person {
  takeNap(): void {
    console.log(`I'm sleeping 10 Hours per day`);
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log(`I'm sleeping 2 Hours per day`);
  }
}

function getNap(param: Person) {
  param.takeNap();
}
const person1 = new Person();
const person2 = new Man();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radious: number;
  constructor(radious: number) {
    super();
    this.radious = radious;
  }
  getArea(): number {
    return Math.PI * this.radious * this.radious;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

function getAreaOfShape(params: Shape) {
  console.log(params.getArea());
}
getAreaOfShape(new Circle(20));
getAreaOfShape(new Rectangle(20, 30));
