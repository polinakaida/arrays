class Vehicle {
    constructor(dimensions, brand, model, manufactureDate) {
        this.dimensions = dimensions;
        this.brand = brand;
        this.model = model;
        this.manufactureDate = new Date(manufactureDate);
    };
    getFullInfo() {
        return `бренд: ${this.brand}, модель: ${this.model}, вік: ${this.age}`
    };
    get age() {
        return new Date().getFullYear() - this.manufactureDate.getFullYear();
    };
}

const vehicle = new Vehicle({
        length: 30,
        width: 20,
        height: 50
    }, 'porsche', 'GTS911', '2020-05-10');

console.log(vehicle.getFullInfo());

class PassengerTransport extends Vehicle {
    constructor(dimensions, brand, model, manufactureDate, passengerLimit, passengerCount) {
        super(dimensions, brand, model, manufactureDate);
        this.passengerLimit = passengerLimit;
        this.passengerCount = passengerCount || 0;
    };
    getFullInfo() {
        return `бренд: ${this.brand}, модель: ${this.model}, вік: ${this.age}, максимальна кількість пасажирських місць: ${this.passengerLimit}`
    };
    addPassenger() {
        if (this.passengerCount < this.passengerLimit) {
            this.passengerCount += 1;
            return true;
        }
        return false;
    };
}

const passengerVehicle = new PassengerTransport({
    length: 110,
    width: 320,
    height: 250
}, 'volkswagen', 'CB22', '2015-10-10', 15, 11);

console.log(passengerVehicle.addPassenger());

console.log(passengerVehicle.getFullInfo());

class FreightTransport extends Vehicle {
    constructor(dimensions, brand, model, manufactureDate, capacity) {
        super(dimensions, brand, model, manufactureDate);
        this.capacity = capacity;
    };
    getFullInfo() {
        return `бренд: ${this.brand}, модель: ${this.model}, вік: ${this.age}, вантажопідйомність: ${this.capacity}`
    };
    checkLoadingPossibility(weight) {
        return weight <= this.capacity;
    };
}

const freightVehicle = new FreightTransport({
    length: 1310,
    width: 3620,
    height: 2550
}, 'tesla', 'car7F', '2023-01-03', 5000);

console.log(freightVehicle.getFullInfo());
console.log(freightVehicle.checkLoadingPossibility(6000));