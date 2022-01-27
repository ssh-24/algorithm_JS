let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let input_num = Number(input[0])
let arr = []
let count = 0

// 좌표값 넣기
for (let i = 0; i < input_num; i++) {
    arr[i] = input[i+1].toString().trim().split(' ').map(item => Number(item))
}

// y좌표 기준 정렬
while (true) {
    if ( count >= arr.length -1) break;

    count++

    for (let i = 0; i < arr.length-1; i++) {
        if ( arr[i][1] > arr[i+1][1] ) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
}

// x좌표 기준 정렬
for (let i = 0; i < arr.length-1; i++) {
    if ( arr[i][1] === arr[i+1][1] ) {
        if ( arr[i][0] > arr[i+1][0] ) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
}

// 출력 양식
for (let i = 0; i < input_num; i++) {
    console.log(arr[i][0] + ' ' + arr[i][1])
}