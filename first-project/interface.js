"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let user1;
user1 = new Person('Elvis');
user1.name = 'john';
user1.greet('elvis');
console.log(user1);
