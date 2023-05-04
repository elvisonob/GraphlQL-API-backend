interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user1: Greetable;

user1 = new Person('Elvis');
user1.name = 'john';

user1.greet('elvis');
console.log(user1);
