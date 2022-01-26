let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

const arr = input[0].split(' ').map(item => Number(item))
let temp
let count = 0
let ans_str = ''

while (true) {
    if (count >= arr.length-1) break;

    count++

    for (let i = 0; i < arr.length -1; i++) {
        if(arr[i] > arr[i+1]) {
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
    
            // 교체했다면 할때마다 출력
            for (let j = 0; j < arr.length; j++) {
                if (j===arr.length -1) {
                    ans_str += arr[j];
                }
                else ans_str += arr[j] + ' '
            }
            console.log(ans_str)
            ans_str = ''
        }
    }
}