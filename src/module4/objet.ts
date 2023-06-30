class Animal {
  //   public name: string;
  //   public spices: string;
  //   public sound: string;
  constructor(
    public name: string,
    public spices: string,
    public sound: string
  ) {
    // this.name = name;
    // this.spices = spices;
    // this.sound = sound;
  }
  public makeSound() {
    console.log(`this ${this.name} sound is ${this.sound}`);
  }
}

const dog = new Animal(`Garman Shepard`, `dog`, `vou vou`);
dog.makeSound();
