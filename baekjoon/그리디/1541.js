let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('-')
// let input = fs.readFileSync('예제.txt').toString().split('-')

let ans = 0 // 결과값

for (let i = 0; i < input.length; i++) {
    let temp = input[i].split('+').map(Number)

    // 첫 항일때
    if (i === 0) {
        for (let j = 0; j < temp.length; j++) {
            ans += temp[j]
        }
    }
    // 나머지 항
    else {
        for (let j = 0; j < temp.length; j++) {
            ans -= temp[j]
        }
    }
}

console.log(ans);