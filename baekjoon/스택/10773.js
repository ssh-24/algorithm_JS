let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let k = Number(input[0])
let arr = []
let result = 0

for (let i = 1; i <= k; i++) {
    if(Number(input[i])!==0){
        arr.push(Number(input[i]))
    }
    else {
        arr.pop()
    }
}

for (let i = 0; i < arr.length; i++) {
    result += Number(arr[i])
}

console.log(result)