type NewYork = {
  name: string;
  precinct: string;
};

type Florida = {
  name: string;
  population: string;
  date: Date;
};

type UnitedStates = NewYork & Florida;

const country: UnitedStates = {
  name: 'Beautiful country',
  precinct: 'Manhanttan',
  population: '300,000,000',
  date: new Date(),
};

type Combinable = string | number;
type Combinable2 = number | boolean;

type AllCombinable = Combinable & Combinable2;

const add = (a: Combinable, b: Combinable2) => {
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

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const movingAnimal = (animal: Animal) => {
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

interface ErrorChecking {
  [prop: string]: string;
}

const checking: ErrorChecking = {
  email: 'how are you',
};

const storedData = 0;

const testing = storedData || 'DEFAULT';

console.log(testing);
