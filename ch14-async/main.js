const start = new Date();
let i = 0;
const intervalId = setInterval(function() {
    let now = new Date();
    if(now.getMinutes() !== start.getMinutes() || ++i > 10)
        return clearInterval(intervalId);
    console.log(`${i}: ${now}`);
}, 5 * 1000);

// ! Обязательства (promise)
function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for(let i = seconds; i >= 0; i--) {
            setTimeout(function() {
                if(i > 0) console.log( i + '...');
                else resolve(console.log('Старт!'));
            }, (seconds - i) * 1000);
        }
    });
}

countdown(5).then(
    function() {
        соnsоlе.lоg("Обратный отчет завершен");
    },
    function(err) {
        console.log("Oшибкa при обратном отсчете: " + err.message);
    }
);

const р = countdown(5);
p.then(function() {
    соnsоlе.lоg("Обратный отчет завершен");
});
p.catch(function(err) {
    console.log("Oшибкa при обратном отсчете: " + err.message);
});

function countdown(seconds) {
    return new Promise(function(resolve, reject) {
        for( let i = seconds; i >= 0; i-- ) {
            setTimeout(function() {
                if( i === l3 ) return reject( new Еrrоr("Принципиально это не считаем !"));
            });
        }
    });
}

// Предотвращение незавершенных обязательств
function addTimeout( fn, timeout ) {
    if ( timeout === undefined) timeout = 1000 ; // стандартный период
    return function ( ... args ) {
        return new Promise ( function ( resolve , reject ) {
            const tid = setTimeout(reject , timeout , new Еrrоr("Истек период обязательства"));
            fn ( ...args )
        });
    }
}

