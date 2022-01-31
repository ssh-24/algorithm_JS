let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
// let input = fs.readFileSync('예제.txt').toString().split('\n')

const N = Number(input[0])
let time_list = [] // 회의 시간 2차원 배열
for (let i = 0; i < N; i++) {
    time_list[i] = input[i+1].split(' ').map(Number)
}

// 회의 종료시간 기준 정렬
time_list.sort((a,b) => {
    // 끝나는 시간 동일하다면 시작 시간으로 정렬
    if (a[1] === b[1]) {
        return a[0] - b[0]
    }
    else return a[1] - b[1]
})

// 초기 세팅
let count = 1
let temp = time_list[0][1] // 첫번째 항목의 회의 종료시간

// 직전 회의 종료시간 vs 다음 회의 시작시간 비교
for (let i = 1; i < N; i++) {
    if (temp <= time_list[i][0]) {
        temp = time_list[i][1]
        count += 1
    }
}

console.log(count);