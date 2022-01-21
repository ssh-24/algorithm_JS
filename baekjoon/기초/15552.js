let fs = require('fs')
let input = fs.readFileSync('예제.txt').toString().split('\n') /// 제출시 dev/stdin 으로 입력

let count = Number(input[0])
let answerStr = '';

for(let i = 1; i <= count; i++){
    let num = input[i].split(" ");
    answerStr += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answerStr);