let fs = require('fs');
// let input = fs.readFileSync('dev/stdin').toString().trim().split('').map(Number)
let input = fs.readFileSync('예제.txt').toString().trim().split('').map(Number)
// 맞왜틀 8트 결과 => trim() 없어서 그런 것. 모니터 부술뻔ㅋㅋ

const solution = (arr) => {
    let current = arr[0];
    let ones = 0;
    let zeros = 0;

    for (let i = 1; i < arr.length; i++) {
        if (current !== arr[i]) {
            if (current === 1) { ones++; }
            else if (current === 0) { zeros++; }
            current = Number(!current)
        }

        if (i === arr.length-1) {
            if (current === 1) ones++;
            else if (current === 0) zeros++;
        }
    }

    return ones >= zeros? zeros : ones;
}

console.log(solution(input));