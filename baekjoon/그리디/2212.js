let fs = require('fs')
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('예제.txt').toString().trim().split('\n')

const N = +input[0]
const K = +input[1]
const sensor = input[2].split(' ').map(i => +i);

const solution = (n, k, sensor) => {
    if (k >= n) return 0;

    const diff = []; // 거리 차이
    let answer = 0; // 거리 합

    // 센서 위치 오름차순 정렬
    sensor.sort((a,b) => a - b);

    // 거리 차이 배열
    for (let i = 0; i < n-1; i++) {
        diff.push(sensor[i + 1] - sensor[i]);
    }

    // 거리 차를 내림차순 정렬
    diff.sort((a,b) => b - a);

    // k - 1 부터 n - 1 까지의 거리 합
    for (let i = k - 1; i < n - 1; i++) {
        answer += diff[i];
    }

    return answer;
}

const answer = solution(N, K, sensor);
console.log(answer);