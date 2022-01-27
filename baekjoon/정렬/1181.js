let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let input_num = Number(input[0])
let count = 0
let arr = []
for (let i = 0; i < input_num; i++) {
    arr[i] = input[i+1].toString().trim()
}

// 사전 순 정렬
arr = arr.sort()

// 길이 순 정렬
while (true) {
    if (count >= arr.length-1) break;

    count++
    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i].length > arr[i+1].length) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
}

// 중복 제거 ( Set 객체 활용 )
const set = new Set(arr)
const sorted_arr = Array.from(set)

// 출력
for (let i = 0; i < sorted_arr.length; i++) {
    console.log(sorted_arr[i]);
}