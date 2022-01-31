let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
// let input = fs.readFileSync('예제.txt').toString().split('\n')

const NandK = input[0].split(' ').map(Number)
const N = NandK[0] // 동전의 종류
let K = NandK[1] // 총 값어치, 변하도록 let

let ans = 0 // 동전개수의 최솟값

for (let i = N; i >= 0; i--) {
    let current_coin = Number(input[i])
    if (K >= current_coin) {
        ans += parseInt(K / current_coin)
        K = K % current_coin
    }
}

console.log(ans);