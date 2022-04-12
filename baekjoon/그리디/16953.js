let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split(' ')
// let input = fs.readFileSync('예제.txt').toString().split(' ')

const first = +input[0]
const second = +input[1]

const solution = (first, second) => {
    let result = 0;
    while (first !== second) {
        if (first > second) return -1;
        else if (getLastNum(second) === 1) {
            second = removeOne(second);
        }
        else if (getLastNum(second) !== 1) {
            second /= 2;
        }
        result += 1;
    }
    return result + 1;
}

const getLastNum = (num) => {
    return Number(String(num).split('')[String(num).split('').length-1]);
}

const removeOne = (num) => {
    const numArr = String(num).split('');
    numArr.pop();
    return Number(numArr.join(''));
}

const result = solution(first, second);
console.log(result);