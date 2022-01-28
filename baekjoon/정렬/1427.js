let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('').map(item => parseInt(item))
// let input = fs.readFileSync('예제.txt').toString().trim().split('').map(item => parseInt(item))

console.log(input.sort((a,b)=>b-a).join(''));