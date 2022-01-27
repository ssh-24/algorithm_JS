let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let N = Number(input.shift())
let arr = []
for (let i = 0; i < N; i++) {
    arr.push(input[i].trim().split(' ').map(item => +item)) // 숫자 형변환 (+)연산자
}
let ans_str = ''

// 정렬
arr.sort((a,b) => {
    if(a[1] === b[1]) { return a[0] - b[0] } // 인덱스 0의 기준으로 오름차순
    else { return a[1] - b[1] } // 인덱스 1의 값을 기준으로 오름차순
})

arr.forEach(e => {
    ans_str += e[0] + ' ' + e[1] + '\n'
})

console.log(ans_str);