'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
    }
}

class Rabbit extends Animal {
    walk() {
        super.walk();
    }
}

new Rabbit("Вася").walk();
new Animal("Вася").walk();