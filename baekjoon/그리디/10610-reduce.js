const fs = require('fs')
// const readFileSyncAddress = '/dev/stdin';
const readFileSyncAddress = '예제.txt';
const input = fs.readFileSync(readFileSyncAddress).toString().trim().split('\n');

const input_num = input[0]

function solve(n) {
    if (!n.split('').includes('0')) {
        console.log('-1');
        return
    }

    // 분리된 숫자 배열
    const arr = n.split('').map(item => Number(item))
    // reduce 메서드 활용 - 각 요소 누산
    const sum = arr.reduce((acc,cur)=> acc + cur)

    if (sum % 3 !== 0) {
        console.log('-1');
    }
    else {
        console.log(arr.sort((a,b)=>b-a).join(''));
    }
}

solve(input_num)