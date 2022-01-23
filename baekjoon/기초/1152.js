let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let ipstr = input[0].split(' ')
let filtered = ipstr.filter((element) => element !== '')

console.log(filtered.length)