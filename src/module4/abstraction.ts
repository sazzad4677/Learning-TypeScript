// interface IVehicle {
//   name: string;
//   modal: string;
// }

// const vehicle: IVehicle = {
//   name: "Toyota",
//   modal: "2020",
//}
// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class Vehicle implements IVehicle {
//   constructor(public name: string, public modal: string) {}
//   startEngine(): void {
//     console.log(`Starting Engine`);
//   }
//   stopEngine(): void {
//     console.log(`Stopping Engine`);
//   }
//   move(): void {
//     console.log(`Moving Engine`);
//   }
//   test(): void {}
// }
// const vehicle1 = new Vehicle("Toyota", "2020");

// Abstract Classes --------------------------------
abstract class Vehicle {
  constructor(public name: string, public modal: string) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {}
  //   test(): void {}
}

class Car extends Vehicle {
  startEngine(): void {}
  stopEngine(): void {}
  move(): void {}
  test(): void {
    // this.
  }
}

// const vehicle1 = new Vehicle("Toyota", "2020");
// vehicle1.
