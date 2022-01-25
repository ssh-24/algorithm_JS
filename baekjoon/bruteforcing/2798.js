let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split("\n")

let count_max = input[0].split(' ')
let count = Number(count_max[0])
let max = Number(count_max[1])
let card_list = input[1].split(' ').map(card => Number(card))

let ans = 0
let sum = 0

for (let i = 0; i < count-2; i++) {
    for (let j = i+1; j < count-1; j++) {
        for (let k = j+1; k < count; k++) {
            sum = card_list[i]+card_list[j]+card_list[k]
            if (sum <= max && ans <= sum) {
                ans = sum
            }
        }
    }
}
console.log(ans)