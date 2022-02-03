let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString()
// let input = fs.readFileSync('예제.txt').toString()

const A = 300
const B = 60
const C = 10

let count = [0,0,0]
let ans = ''  // 출력 문자열

while(true) {
    if (input >= A) {
        count[0] = parseInt(input / A)
        input = input% A
    }
    else if (input >= B) {
        count[1] = parseInt(input / B)
        input = input% B
    }
    else if (input >= C) {
        count[2] = parseInt(input / C)
        input = input% C
    }
    else if (input === 0) {
        for (let i = 0; i < 3; i++) {
            ans += count[i] + ' '
        }
        break
    }
    else {
        ans = '-1'
        break
    }
}

console.log(ans);