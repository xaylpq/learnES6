// функции как подпрограммы
function printLeapYearStatus() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} не високосный.`)
    else if(year % 100 != 0) console.log(`${year} високосный.`)
    else if( year % 400 != 0) console.log(`${year} не високосный.`)
    else console.log(`${year} високосный.`);
}

function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if( year % 400 != 0) return false;
    else return true;
}

const getNextRainbowColor = (function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let colorIndex= -1;
    return function() {
        if( ++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();

setInterval(function() {
    document.querySelector('.rainbow')
        .style['background-color'] = getNextRainbowColor();
}, 500);

// ! Чистая функция
function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    let colorindex = -1;
    return {
        next() {
            if ( ++colorindex >= colors.length ) colorindex = 0 ;
            return { value : colors [ colorindex ] , done : false } ;
        }
    };
}

const rainbowIterator = getRainbowIterator();
setInterval(function() {
    document.querySelector('.rainbow2')
    .style['background-color'] = rainbowIterator.next().value;
}, 500);

// * Немедленно вызываемое функциональное выражение и асинхронный код
setTimeout(function() {console.log("Привет!");},1500);
for (let i = 5; i >= 0 ; i-- ) {
    setTimeout(function() {
        console.log(i === 0 ? "Старт!" : i);
    },(5 - i)*1000);
}

