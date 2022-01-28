let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split(' ').join('').split('\n').join('')
// let input = fs.readFileSync('예제.txt').toString().split(' ').join('').split('\n').join('')

// 알파벳 카운트 배열
let alpha_count_arr = new Array(26).fill(0)

// 알파벳 카운트
for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
        alpha_count_arr[input[i].charCodeAt()-97]++
    }
}

// console.log(alpha_count_arr);

let ans = ''

for (let i = 0; i < alpha_count_arr.length; i++) {
    if( alpha_count_arr[i] === Math.max(...alpha_count_arr)) {
        ans += String.fromCharCode(i+97)
    }
}
console.log(ans);