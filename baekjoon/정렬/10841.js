let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
// let input = fs.readFileSync('예제.txt').toString().split('\n')

let N = Number(input.shift())
let arr = []
for (let i = 0; i < N; i++) {
    arr.push(input[i].trim().split(' '))
}
let ans_str = ''

arr.sort((a,b) => {
    if(Number(a[0]) < Number(b[0])) return -1 // a-b < 0 이면 a를 낮은 인덱스로 정렬
})

for (let i = 0; i < N; i++) {
    ans_str += arr[i][0] + ' ' + arr[i][1] + '\n'
}

console.log(ans_str);