// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.

function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}

Vehicle.prototype.drive = function (kmh) {
  this.speed = kmh;
  return `${this.driver} driving at ${kmh} kilometers per hour `;
};

Vehicle.prototype.stop = function () {
  this.speed = 0;
  return `${this.driver} has stopped`;
};

function Train(driver) {
  Vehicle.call(this, driver);
}

Train.prototype = Object.create(Vehicle.prototype);

Train.prototype.constructor = Train;

function Truck(driver) {
  Vehicle.call(this, driver);
  this.cargo = [];
}

Truck.prototype = Object.create(Vehicle.prototype);

Truck.prototype.constructor = Truck;

Truck.prototype.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this.cargo;
};

Truck.prototype.unloadCargo = function () {
  return this.cargo.pop();
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
