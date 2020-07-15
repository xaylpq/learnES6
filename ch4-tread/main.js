// ! Игра - Корона и Якорь(Crown and Anchor)
// возвраща ет случайное целое число в диапазоне [т , п] (включительно)
function rand (m, n) {
    return m + Math.floor((n-m+1)*Math.random()); 
}
// случайно возвращает строку, представляющую одну из шести граней Короны и Якоря
function randFace() {
    return ["crown","anchor","heart","spade","club","diamond"] [rand(0,5)];
}

// Начальные условия
let funds = 50;
let round = 0;

while(funds > 1 && funds < 100) {             
    round++ ;
    console.log(`round ${round}:`);
    console.log(`\tstarting funds: ${funds} p`);
    // Размещение ставок
    let bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};
    let totalBet = rand(1, funds);
    if (totalBet === 7 ) {
        totalBet = funds;
        bets.heart = totalBet; 
    } else {
        // Распределение всех ставок
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while( remaining > 0 ) 
    }
    funds = funds - totalBet;
    console.log('\tbets: ' + Object.keys(bets).map(face=> `${face}: ${bets[face]} pence`).join(', ')+` ( total: ${totalBet} репсе)`);
    // Бросок костей
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);
    // Получение выигрыша
    let winnings = 0;
    for (let die= 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0 ) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log (`\twinnings: ${winnings}`);
}
console.log(`\tending funs: ${funds}`);
