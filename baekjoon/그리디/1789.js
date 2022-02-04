const fs = require('fs')
const readFileSyncAddress = '/dev/stdin';
// const readFileSyncAddress = '예제.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

let S = Number(input[0]) // 최댓값
let ans = 0 // 최대 갯수
let sum = 0 // 1부터 누적합
let i = 1

while (true) {
    if (sum > S) {
        // console.log(sum);
        console.log(ans-1); // 넘었을때보다 1개 뺀 갯수로 잘 조정하면 만들 수 있다.
        break;
    }
    sum += i++
    ans++
}