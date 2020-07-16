const USER_EMAIL = Symbol();
class User {
    setEmail(value) {
        if(!/@/.test(value)) throw new Error(`Неправильный адрес: ${value}`);
        this[USER_EMAIL] = value;
    }
    getEmail() {
        return this[USER_EMAIL];
    }
}

const u = new User();
u.setEmail('jahn@doe.com');
console.log(`Адрес пользователя: ${u.getEmail()}`);

const obj = {foo: 'bar'};
Object.getOwnPropertyDescriptor(obj, 'foo'); // { value: 'bar', writable: true, enumerable: true, configurable: true }

Object.defineProperty(obj, 'foo', {writable: false});
obj.foo = 3;
console.log(obj.foo); // bar

// ! Proxy-объекты
const coefficients = {
    a: 1,
    b: 2, 
    c: 5,
};

function evaluate(x, c) {
    return c.a + c.z * x * c.c * Math.pow(x, 2);
}

evaluate(5, coefficients); // NaN

const betterCoeficients = new Proxy(coefficients, {
    get(target, key) {
        return target[key] || 0;
    },
});

betterCoefficients.z ; // 0

// Добавим регулярку для проверки одиночной строчной буквы
const betterCoeficients = new Proxy(coefficients, {
    get(target, key) {
        if(!/^[a-z]$/.test(key)) return target[key];
        return target[key] || 0;
    },
});

