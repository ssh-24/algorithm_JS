const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin';
const readFileSyncAddress = '예제.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const T = +input.shift() // 테스트케이스 수

// 테스트케이스 수 T만큼 반복
for (let t = 0; t < T; t++) {
    let count = 1
    let N = +input.shift() // 지원자 수
    let arr = [] // 테스트케이스마다 2차원 배열
    for (let i = 0; i < N; i++) {
        arr[i] = input.shift().trim().split(' ').map(Number)
    }
    arr.sort((a,b) => a[0]-b[0]) // 서류 성적 등수 오름차순 정렬

    // 앞의 값보다 등수가 낮을 경우 count ++
    let min = arr[0][1]
    for (let i = 1; i < N; i++) {
        if ( arr[i][1] < min ){
            min = arr[i][1]
            count++
        }
    }
    console.log(count)
}

// Array.prototype.shift()가 내부적으로 오래걸리는 듯