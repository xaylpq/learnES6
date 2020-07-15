// литеральные массивы
const arrl = [1, 2, 3] ;
const arr2 = [" one", 2, "three"];
const arr3 = [ [ 1, 2, 3] , [ "one " , 2 ] ];

// доступ к элементам
arr1[0];
arr1[2];
arr3[1][О];
arr1.length;

// Конструктор Array (используется редко)
const arr4 = new Array(); // пустой массив
const arr5 = new Array(2); // массив длиной 2 (все элементы undefined)
const arr6 = new Array ("2"); // ["2"]

const arr = [ "Ь " , " с " , " d" ];
arr.push("e"); // возвращает 4, теперь arr[ "Ь " , " с " , "d " , "е "]
arr.рор(); // возвращает "е"; теперь arr[ "Ь " , "с", "d" ]
arr.unshift("a"); // возвращает 4 ; теперь arr[ "а ", "Ь " , " с " , "d " ]
arr.shift(); // возвращает "а"; теперь arr [ "Ь " , "с", "d "]

const arr = [1 , 2 , 3] ;
arr.concat ( 4, 5, 6 ); // возвращает [1, 2, 3, 4, 5, 6]; arr неизменен
arr.concat ( [4, 5, 6] ); // возвращает [ 1, 2, 3, 4, 5, 6]; arr неизменен
arr.concat ( [4, 5], 6 ); // возвращает [ 1, 2, 3, 4, 5, 6) ; arr неизменен
arr.concat ( [4, [5, 6]] ) ; // возвращает [1, 2, 3, 4, [5, 6] ]; arr неизменен

const arr = [1,2,3,4];
arr.copyWithin(1, 2); // теперь arr [1,3,4,4] 
arr.copyWithin(2,0,2); // теперь arr [1,3,1,3]
arr.copyWithin(0,-3,-1); // теперь arr [3,1,1,3]

const arr = new Array(5).fill(1); // arr инициализируется[1, 1, 1, 1, 1]
arr.fill("a"); // теперь arr["а", "а", "а", "а", "а"] 
arr.fill("b", 1); // теперь arr["а", "Ь", "Ь", "Ь", "Ь"]
arr.fill("c", 2 , 4); // теперь arr["а", "Ь" , "с", "с", "Ь"]
arr.fill(5.5, -4); // теперь arr[ "а", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); // теперь arr ["а", 5.5, 0, 0, 5.5]

const arr = [ 1 , 2 , 3 , 4 , 5 ];
arr.reverse(); // теперь arr [5, 4, 3, 2, 1]

const arr = [5,3,2,4,1];
arr.sort(); // теперь arr [1,2,3,4,5]

const arr = [ {name: "Suzanne" }, {name: " Trevor"}, {name: " Jim" }, { name: "Amanda" } ];
arr.sort();                                         // arr неизменен
arr.sort((a,Ь) => a.name > b.name);                 // arr отсортирован в алфавитном порядке свойству пате
arr.sort((a,Ь) => a.name[l] < b.name [l]);          // arr отсортирован в обратном алфавитному порядке по ВТОРОМУ СИМВОЛУ В свойстве пате

const arr = [ 5 , 7 , 12 , 15 , 17 ] ;
arr.some(x => х % 2 === 0);                       // true; 12 четно
arr.some( x => NumЬer.isInteger(Math.sqrt(x))); // false; нет квадратов

const arr = [4, 6, 16, 36] ;
arr.every( x => х % 2 === 0 );                       // true; нет нечетных чисел
arr.every( x => NumЬer.isInteger(Math.sqrt(x)));   // false; 6 - не квадрат

const cart = [{ name: "Widget", price: 9.95 } , {name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name);                // [ "Widget", "Gadget "]
const prices = cart.map(x => x.price);              // [ 9.95 , 22.95]
const discountPrices = prices.map (x => х*0.8);     // [ 7.96, 18.36]
const lcNames = names.map(String.toLowerCase);      // [ "widget", "gadget"]

// * создать колоду игральных карт
const cards = [];
for( let suit of ['Н', 'С', 'D', 'S'] ) // червы, трефы, бубны, пики
    for( let value = 1; value <= 13 ; value++ )
        cards.push({suit, value});
// получить все карты со зна чением 2:
cards.filter( c => c.value === 2 ); // [
                                    // { suit:'Н', value:2 },
                                    // {suit: 'С', value: 2 },
                                    // ( suit:'D', value:2 },
                                    // {suit:'S', value: 2 }
                                    // ]
// (далее для краткости мы выводим только длину)
// получить все бубны:
cards.filter (c => c.suit === 'D');     // длина: 13
// получить все фигуры
cards.filter (c => c.value > 10);       // длина: 12
// получить все червовые фигуры
cards.filter(c => c.value > 10 && c.suit === 'Н'); // длина : 3

const arr = [5, 7, 2, 4];
const sum = arr.reduce((a,х) => а += х, 0);

const arr = [ 1, null, "hello", "world", true, undefined ];
delete arr [З];
arr.join();     // "1,,hello,,true,"
arr.join('');   // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true "
