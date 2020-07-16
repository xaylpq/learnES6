const book = [
    "Twinkle, twinkle, little bat!",
    "How I wonder what you're at!",
];

const it = book.values(); // объявляем итератор
it.next(); // {value: "Twinkle, twinkle, little bat!", done: false}
it.next(); // {value: "How I wonder what you're at!", done: false}
it.next(); // {value: undefined, done: true}

class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({ message: message, timestamp: Date.now() });
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();
log.add("Первая запись");
log.add('Вторая запись');

for( let entry of log ) {
    console.log(`${entry.message} @ ${entry.timestamp}`);
}

// ! Собственный итератор
// [Symbol.iterator]() {
//     let i = 0;
//     const messages = this.messages;
//     return {
//         next() {
//             if (i >= messages.length)
//                 return { value: messages[i++], done: true };
//             return { value: messages[i++], done: false }
//         }
//     }
// }

// ! Генераторы
function* colors() {
    yield 'red';
    yield 'green';
}

const itc = colors();
itc.next(); // { value: 'red', done: false }
itc.next(); // { value: 'green', done: false }
itc.next(); // { value: undefined, done: true }

for( let color of colors()) {
    console.log(color);
}

// Выражения yield и двухсторонняя связь
function* interrogate() {
    const name = yield 'Как вас зовут?';
    const pet = yield 'Кто ваш питомец?';
    return `У ${name} есть ${pet}.`;
}

const iti = interrogate();
it.next(); // { value: 'Как вас зовут', done: false}
it.next('Миша'); // {value: 'Кто ваш питомец', done: false}
it.next('собака'); // {value: 'У Миша есть собака', done: true}

