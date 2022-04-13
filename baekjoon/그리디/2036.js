// node.js로는 정답처리가 안되는 문제인듯ㅎㅎ

let fs = require('fs')
// let input = fs.readFileSync('dev/stdin').toString().split('\n').map(Number)
let input = fs.readFileSync('예제.txt').toString().split('\n').map(Number)

const N = input.shift();

const solution = (numbers) => {
    let answer = 0
    const zero = []
    const minus = []
    const plus = []

    for (let i = 0; i < N; i++) {
        if (numbers[i] === 1) {
            answer++;
        }
        else if (numbers[i] === 0) {
            zero.push(numbers[i]);
        }
        else if (numbers[i] < 0) {
            minus.push(numbers[i]);
        }
        else plus.push(numbers[i]);
    }

    // 절댓값이 큰 순서대로 정렬
    minus.sort((a,b) => a - b)
    plus.sort((a,b) => b - a)

    // 홀수 길이 배열일 때 끝값 처리
    if (plus.length % 2 !== 0) {
        answer += plus.pop()
    }
    if (minus.length % 2 !== 0) {
        if (zero.length >= 1) {
            minus.pop()
        }
        else answer += minus.pop()
    }

    // plus 계산
    while (true) {
        if (plus.length === 0) break;
        answer += plus.shift() * plus.shift()
    }

    // minus 계산
    while (true) {
        if (minus.length === 0) break;
        answer += minus.shift() * minus.shift()
    }

    return answer;
}

console.log(solution(input));