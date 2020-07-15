// перебор свойств в объекте
const SYM = Symbol();
const o = {a:1, b:2, c:3, [SYM]: 4};
for (let prop in o) {
    // if (!o.hasOwnProrty(prop)) continue; // ! Ругается на метод
    console.log(`${prop}: ${o[prop]}`);
}

Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
const ob = {apple:1, xochitl:2, balloon:3, guitar:4, xylophone:5, };
Object.keys(ob)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}: ${ob[prop]}`));

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.usersGears = ['P', 'N', 'R', 'D'];
        this.usersGear = this.usersGears[0];
    }
    shift(gear) { // Проверяет, существует ли такая передача прежде чем установить значение
        if(this.usersGears.indexOf(gear) < 0)
            throw new Error(`Ошибочная передача: ${gear}`);
        this.usersGear = gear;
    }
}

const car1 = new Car('Tesla', 'Model S');
const car2 = new Car('Mazda', '3i');

car1 instanceof Car // true
car1 instanceof Array // false

car1.shift('D');
car2.shift('R');

console.log(car1.usersGear) // 'D'
console.log(car2.usersGear) // 'R'

class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._usersGears = ['P', 'N', 'R', 'D'];
        this._usersGear = this._usersGears[0];
    }
    get userGear() {return this._usersGear;}
    set userGear(value) {
        if(this._usersGears.indexOf(value) < 0)
            throw new Error(`Ошибочная передача: ${value}`);
        this._userGear = value;
    }
    shift(gear) { this.usersGear = gear; }
}

// Чтобы сделать основное текущее свойство передачи действительно закрытым сделаем так
const Car3 = (function() {
    const carProps= new WeakMap();

    class Car3 {
        constructor (make, model) {
            this.make = make; 
            this.model = model;
            this._usersGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {userGear: this._usersGears[0]});
        }
        get userGear() {return carProps.get(this).userGear;}
        set userGear(value) {
            if(this._usersGears.indexOf(value) < 0)
                throw new Error(`Ошибочная передача: ${value}`);
                carProps.get(this).userGear = value;
        }
        shift(gear) { this.usersGear = gear; }
    }
    return Car3;
})();

// определенный ранее класс Car с методом shift
const carl = new Car();
const car25 = new Car();
carl.shift === Car.prototype.shift; // true
carl.shift('D');
carl.shift('d');    // ошибка
carl.userGear;      // 'D '
carl.shift === car25.shift // true
carl.shift = function(gear) {this.userGear = gear.toUpperCase();}
carl.shift === Car.prototype.shift; // false
carl.shift === car25.shift; // false
carl.shift('d');
carl.userGear; // 'D '

// ! Наследование
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log('Транспортное средство создано');
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}

class Car32 extends Vehicle {
    constructor() {
        super();
        console.log('Автомобиль создан');
    }
    deployAirbags() {
        console.log('БАБАХ!!!');
    }
}

const v = new Vehicle();
v.addPassenger('Frank');
v.addPassenger('Judy');
v.passengers;               // ['Frank', 'Judy']
const c = new Car32();
c.addPassenger('Alice');
c.addPassenger('Cameron');
c.passengers;               // ['Alice', 'Cameron']
v.deployAirbags();          // ошибка
c.deployAirbags();          // Бабах!

// Перебор свойств
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}
// это допустимо, но не желательно...
Super.prototype.sneaky = 'Не рекомендуется';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();

for(let p in obj) {
    console.log(`${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : ' (унаследованно)'));
}

// Строковое представление
class Car {
    toString() {
        return `${this.make} ${this.model}: ${this.vin}` ;
    }
    // ...
}

