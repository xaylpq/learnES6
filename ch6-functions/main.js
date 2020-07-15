function getSentence({subject, verb, object}){
    return console.log(`${subject} ${verb} ${object}`);
}
const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};
getSentence(o); // "I love JavaScript "

function addPrefix (prefix, ...words) {
    // позже мы изучим лучший способ сделать это !
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++){
    prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
console.log(addPrefix("con", "verse", "vex")); // [ "converse " , "convex "]

// ! this
const о = {
    name: 'Wallace',
    speak() {return `Меня зовут ${this.name}!`;}, 
}
о.speak(); // "Меня зовут Wallace!"

// this не видит o
// const о = {
//     name: 'Julie',
//     greetBackwards: function() {
//         function getReverseName() {
//             let nameBackwards = '';
//             for (let i=this.name.length-1; i >= O ; i--){
//                 nameBackwards += this.name[i];
//             }
//         return nameBackwards;
//         }
//     return ' $ { getReverseName ( ) } si eman ym , ol l eH ' ;
//     },
// };
// o.greetBackwards();

// Решение - добавление переменной
const o = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i=self.name.length-1; i >= 0 ; i--){
                nameBackwards += self.name[i];
            }
        return nameBackwards;
        }
    return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();

const g = function f(stop) {
    if(stop) console.log('f остановлена');
    f(true);
};
g(false);

// ! Стрелочная нотация
const f1 = function() {return "hello!";}
// или
const fl = () => "hello!";

const f2 = function(name) {return `Hello, ${name}!`;}
// или
const f2 = name => `Hello, ${name}!`;

const fЗ = function(а, Ь) {return а + b;}
// или
const fЗ = (а, Ь) => а + b;


const о = {
    name: 'Julie',
    greetBackwards: function ( ) {
        const getReverseName = ( ) => {
            let nameBackwards = ``;
            for (let i=this.name.length-1; i>= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
    return `${getReverseName()} si eman ym ,olleH`;
    } ,
};
o.greetBackwards();

// ! Методы call, apply и Ьind

const bruce = {name: "Bruce"};
const madeline = {name: "Madeline"};
// эта функция не связана ни с каким объектом, но в се же в ней используется ' this ' !
function greet ( ) {
    return `Привет! Меня зовут ${this.name}!`;
}
greet();                // "Привет! Меня зовут! " - 'this' не привязана
greet.call(bruce);      // "Привет! Меня зовут Bruce !" - 'this' привязана к 'bruce'
greet.call(madeline);   // "Привет! Меня зовут Madeline!" - 'this' привязана к 'madeline'


function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation; 
}
update.call(bruce, 1949, 'singer');
// bruce теперь { пате: "Bruce " , ЬirthYear: 1949, occupatioп: "siпger"}
update.call(madeline, 1942, 'actress');
// тadeliпe теперь {пате: "Madeliпe", ЬirthYear: 1942, occupatioп: "actress"}

update.apply(bruce, [1955, "actor"]);
// bruce теперь {пате: "Bruce", ЬirthYear: 1955, оссираtioп: "actor"}
update.apply(madeline, [1918, "writer"]);
// тadeliпe теперь {пате: "Madeliпe", ЬirthYear: 1918, occupatioп: "writer"}

const arr = [ 2, 3, -5, 15, 7];
Math.min.apply(null, arr);  // -5
Math.max.apply(null, arr ); // 15

// Оператор расширения
const newBruce = [ 1940, "martial artist"];
update.call(bruce, ...newBruce); // эквивалент apply(bruce, пewBruce)
Math.min(...arr); // -5
Math.max(...arr ); // 15
// this не важно для функции math, поэтому можно исчпользовать оператор ... а для метода update все еще используем call

// * Функция Ьind позволяет перманентно ассоциировать значение для this с функцией
/*
    Предположим, что мы распространяем свой метод update и хотим удостовериться, 
    что в нем переменной this всегда будет присвоено значение bruce, независимо от того, 
    как он будет вызван (даже с функцией call, apply или другой функцией bind). Функция bind позволяет сделать так
*/
const updateBruce = update.bind(bruce);
updateBruce(l904, "actor"); // bruce теперь {пате: "Bruce", birthYear: 1904, occupatioп: "actor"}
updateBruce.call(madeline, 1274, "king"); // bruce теперь {пате: "Bruce", ЬirthYear: 1274, occupatioп: "king"};
// madeline не былo присвоено!

/*
    Если необходима функция update, которая всегда устанавливает год рождения bruce равным 1949, 
    но все еще позволяет изменять род занятия, вполне можете поступить следующим образом.
*/
const updateBrucel949 = update.bind(bruce, 1949);
updateBrucel949("singer, songwriter");// bruce теперь {пате: "Bruce", ЬirthYear: 1949, occupation: "singer, songwriter"}

