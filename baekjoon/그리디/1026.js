let fs = require('fs')
// let input = fs.readFileSync('dev/stdin').toString().split('\n')
let input = fs.readFileSync('예제.txt').toString().split('\n')

const N = Number(input[0])
let arr_A = input[1].toString().split(' ').map(Number)
let arr_B = input[2].toString().split(' ').map(Number)
let ans = 0

// 오름, 내림차순 정렬
arr_A.sort((a,b) => a-b)
arr_B.sort((a,b) => b-a)

for (let i = 0; i < N; i++) {
    ans += arr_A[i]*arr_B[i]
}

console.log(ans);