let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n').map(Number)
// let input = fs.readFileSync('예제.txt').toString().split('\n').map(Number)

const N = input[0]
let arr = []
let max = 0 // 최대 중량
for (let i = 0; i < N; i++) {
    arr[i] = input[i+1]
}
arr.sort((a,b) => b - a) // 내림차순 정렬

// 최대 중량 구하기
for (let i = 0; i < N; i++) {
    if (arr[i] * (i+1) >= max) {
        max = arr[i] * (i+1)
    }
}

console.log(max);