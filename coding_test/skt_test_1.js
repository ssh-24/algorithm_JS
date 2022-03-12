const coins = [1, 5, 10, 50, 100, 500]; // 동전 종류
// const costs = [1, 4, 99, 35, 50, 1000]; // 생산 단가
const costs = [2, 11, 20, 100, 200, 600]; // 생산 단가
const money = 1999;
let coin_rank = [];

for (let i = 0; i < 6; i++) {
    coin_rank.push([costs[i]/coins[i], i])
}

coin_rank.sort((a,b) => a[0]-b[0]);

// console.log(coin_rank);
// console.log(coin_rank[0][1]);

function solution(money, costs) {
    var answer = 0; // 최소비용

    for (let i = 0; i < 6; i++) {
        if (money < coins[coin_rank[i][1]]) continue;
        console.log(i,'번째 반복 실행중');
        answer += parseInt(money/coins[coin_rank[i][1]]) * costs[coin_rank[i][1]]
        money = money % coins[coin_rank[i][1]]
    }

    return answer;
}

console.log(solution(money,costs))


// // 제출 코드
// function solution(money, costs) {
//     var answer = 0;
    
//     const coins = [1,5,10,50,100,500];
//     let coin_rank = [];

//     for (let i = 0; i < 6; i++) {
//         coin_rank.push([costs[i]/coins[i], i])
//     }
//     coin_rank.sort((a,b) => a[0]-b[0]);

//     for (let i = 0; i < 6; i++) {
//         if (money < coins[coin_rank[i][1]]) continue;
//         answer += parseInt(money/coins[coin_rank[i][1]]) * costs[coin_rank[i][1]]
//         money = money % coins[coin_rank[i][1]]
//     }

//     return answer;
// }
// // 끝