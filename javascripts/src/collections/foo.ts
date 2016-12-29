let a: string = "hello";

class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(what: string) {
    console.log(what + " " + this.name);
  }
}