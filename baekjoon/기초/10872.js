let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let num = Number(input[0])
let count = num
let ans = 1

function ptrl(n) {
    if (n === 0) {
        return ans
    }
    else {
        for (let i = 0; i < count; i++) {
            if (num === 1) {
                return ans
            }
            ans = ans * num
            num--
        }
    }
}

console.log(ptrl(num))