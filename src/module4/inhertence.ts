class ParentClass {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  makeSleep(hours: number): void {
    console.log(`${this.name} will sleep for ${hours}`);
  }
}
class Student extends ParentClass {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const student1 = new Student("Tom", 30);

class Teacher extends ParentClass {
  designation: string;
  constructor(name: string, age: number, designation: string) {
    super(name, age);
    this.designation = designation;
  }
  takeClasses(classes: number): string {
    return `This ${this.name} will take ${classes}`;
  }
}

const teacher1 = new Teacher("Y", 54, "Professor");
teacher1.makeSleep(10);
