"use strict";
const country = {
    name: 'Beautiful country',
    precinct: 'Manhanttan',
    population: '300,000,000',
    date: new Date(),
};
const add = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
};
class Car {
    drive() {
        console.log('Driving a Car');
    }
}
class Truck {
    drive() {
        console.log('Driving a Truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const movingAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
    }
    switch (animal.type) {
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed:' + speed);
};
console.log(movingAnimal({ type: 'bird', flyingSpeed: 10 }));
const checking = {
    email: 'how are you',
};
const storedData = 0;
const testing = storedData || 'DEFAULT';
console.log(testing);
