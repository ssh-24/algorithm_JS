let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
// let input = fs.readFileSync('예제.txt').toString().split('\n')

const N = Number(input[0])
const arr = input[1].split(' ').map(Number)
arr.sort((a,b) => a-b)

let total_time = 0
for (let i = 0; i < N; i++) {
    if (i!==0) arr[i] += arr[i-1]
    total_time += arr[i]
}
console.log(total_time);