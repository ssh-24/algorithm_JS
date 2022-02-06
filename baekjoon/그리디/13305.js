const fs = require('fs')
const readFileSyncAddress = '/dev/stdin';
// const readFileSyncAddress = '예제.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let N = Number(input[0]) - 1 // 도시 갯수 - 1
let distances = input[1].trim().split(' ').map((Item)=> BigInt(Item)) // 거리
let prices = input[2].trim().split(' ').map((Item)=> BigInt(Item)) // 가격
prices.pop() // 마지막 도시 가격 필요 x

let current_Price = prices[0] // 현재 가격
let ans = 0n // 최소 가격 합, BigInt라서 n명시

for (let i = 0; i < N; i++) {
    ans += current_Price * distances[i];
    if (current_Price > prices[i+1]) {
        current_Price = prices[i+1]
    }
}
console.log(String(ans)); // BigInt라서 String으로 형변환