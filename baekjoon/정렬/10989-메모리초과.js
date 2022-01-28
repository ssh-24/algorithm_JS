let fs = require('fs')
// let input = fs.readFileSync('dev/stdin').toString().split('\n')
let input = fs.readFileSync('예제.txt').toString().split('\n')

let N = Number(input.shift())
let arr = []
for (let i = 0; i < N; i++) {
    arr.push(input[i].trim())
}
let ans = ''

arr.sort((a,b) => {
    if(Number(a[0]) < Number(b[0])) return -1
})

for (let i = 0; i < N; i++) {
    ans += arr[i] + '\n'
}

console.log(ans);

// JS로는 입력 받는 것부터 메모리 초과가 발생해서 해결불가ㅠ