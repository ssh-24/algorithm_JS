let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split("\n")

let count = Number(input[0])
let num_list = input[1].split('')
let ans = 0

for (let i = 0; i < count; i++) {
    ans += Number(num_list[i])
}
console.log(ans);