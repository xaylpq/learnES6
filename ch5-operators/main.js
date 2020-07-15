let n = 0;
while (true) {
    n += 0.1 ;
    if(Math.abs(n - 0.3) < Number.EPSILON) break;
    console.log(`Stopped at ${n}`);
}

3 + 5 + '8' // результат - строка '88'
"З" + 5 + 8 // результат - строка "358"

const skipit = true;
let х = 0 ;
const result = skipit || х++;

// Оператор запятая
let x = 0, у = 10, z;
z = (x++ , у++); // 10

