let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let str = input[0]
let ans_str = ''
let stack = []

for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
        stack.push(str[i])
    }
    else if (str[i]===')') {
        while (stack.length && stack[stack.length - 1] !== '(') {
            ans_str += stack.pop()
        }
        stack.pop()
    }
    else if (str[i] === '+' || str[i] === '-') {
        while (stack.length && stack[stack.length -1] !== '(') {
            ans_str += stack.pop()
        }
        stack.push(str[i])
    }
    else if (str[i] === '*' || str[i] === '/') {
        while (stack.length && stack[stack.length -1] === '*' ||
        stack.length && stack[stack.length -1] === '/') {
            ans_str += stack.pop()
        }
        stack.push(str[i])
    }
    else {
        // 피연산자 -> 그대로 출력
        ans_str += str[i]
    }
}

while (stack.length) {
    ans_str += stack.pop()
}

console.log(ans_str)