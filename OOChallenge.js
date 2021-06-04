// Car OO challange


// Part one

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return 'Beep.';
  }
  toString() {
    const { make, model, year } = this;
    return `The vehicle is a ${make} ${model} from ${year}`;
  }
}

// Part two
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part three
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return 'VROOM!!!';
  }
}

// Part four
class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(addableVehicle) {
    if (addableVehicle instanceof Vehicle) {
      if (this.capacity > this.vehicles.length) {
        this.vehicles.push(addableVehicle);
        return 'Vehicle added!';
      } else {
        return "Sorry, we're full";
      }
    } else {
      throw new Error('Only vehicles are allowed in here!');
    }
  }
}
