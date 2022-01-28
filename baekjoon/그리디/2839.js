let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let N = Number(input[0])
let count = 0

function getCount(n) {
    while (true) {
        if (n%5 === 0) {
            return n/5 + count
        }
        if (n<0) {
            return -1
        }
        n-=3
        count++
    }
}
console.log(getCount(N))
