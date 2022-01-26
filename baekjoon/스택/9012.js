let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

const T = Number(input[0])

for (let i = 1; i <= T; i++) {
    let cases = input[i]
    let isVPS = 'YES'
    let stack = []

    for (let j = 0; j < cases.length; j++) {
        if (cases[j]==='(') {
            stack.push(1)
        } else {
            if(!stack.pop()) {
                isVPS = 'NO'
                break;
            }
        }
    }

    if (stack.length !== 0) {
        isVPS = 'NO'
    }

    console.log(isVPS)
}