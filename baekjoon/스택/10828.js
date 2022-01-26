let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let count = Number(input[0])
let answerStr = ''
let ms = []

for (let i = 1; i <= count; i++) {
    let inst = input[i].split(' ')
    if (inst[0].trim() ==='push') {
        ms_push(inst[1].trim())
    }
    if (inst[0].trim() ==='pop') {
        answerStr += ms_pop() + "\n";
    }
    if (inst[0].trim() ==='size') {
        answerStr += ms_size() + "\n";
    }
    if (inst[0].trim() ==='empty') {
        answerStr += ms_empty() + "\n";
    }
    if (inst[0].trim() ==='top') {
        answerStr += ms_top() + "\n";
    }
}
console.log(answerStr);

function ms_push(x) {
    ms.push(x)
}

function ms_pop() {
    if (ms.length === 0) {
        return -1
    }
    return ms.pop()
}

function ms_size() {
    return ms.length
}

function ms_empty() {
    if(ms.length === 0) {
        return 1
    }
    return 0
}

function ms_top() {
    if(ms.length === 0) {
        return -1
    }
    return ms[ms.length - 1]
}