/* 

1. Define the Vehicle Class:

- The constructor should include properties: type, make, model, year,
and mileage.

- Use default values for mileage (e.g., 0).

2. Add Methods:

- drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).

- getDetails(): Returns a formatted string describing the vehicle’s
details.

3. Create and Use Vehicle Objects:

- Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).

- Use the drive method to simulate trips and update mileage.

- Use the getDetails method to print each vehicle’s updated
information. 

*/


class vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        return this.mileage += distance;
    }

    getDetails() {
        return `These are the details of your vehicle: \n${this.type}.\n${this.make}.\n${this.model}.\n${this.year}.\n${this.mileage}.`;
    }
}

let newCar = new vehicle("Car", "Toyota", "Supra", "1999", 25620);
let newBike = new vehicle("Motorcycle", "Harley Davidson", "Speedster", "2010", 5000);
let newTruck = new vehicle("Truck", "Toyota", "Tacoma", "2022", 99690);


console.log(newCar.getDetails());
console.log(newCar.drive(100));

console.log("\n");

console.log(newBike.getDetails());
console.log(newBike.drive(200));

console.log("\n");

console.log(newTruck.getDetails());
console.log(newTruck.drive(500));

console.log("\n");