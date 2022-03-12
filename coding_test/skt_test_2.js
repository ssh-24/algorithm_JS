// clockwise : true - 시계 / false - 반시계
// 소용돌이 채우는 문제

const num = 7;
const clockwise = true;

function solution(n, clockwise) {
    var answer = [[]];

    // 2차원 배열 초기화
    answer = Array.from(Array(n), () => Array(n).fill(0))

    // 시계방향
    if (clockwise) {
        // 4 방향
        for (let i = 0; i < 4; i++) {
            switch (i) {
                case 0:
                    // 위
                    for (let i = 1; i < n; i++) {
                        answer[0][i-1] = i
                    }
                    for (let i = 0; i < parseInt(n/2); i++) {
                        answer[i+1][n-2] = answer[i][n-2] + 1
                    }
                    break;
                case 1:
                    // 오
                    for (let i = 0; i < n-1; i++) {
                        answer[i][n-1] = i+1
                    }
                    for (let i = 0; i < parseInt(n/2); i++) {
                        answer[n-parseInt(n/2)][n-parseInt(n/2)-i] = answer[n-parseInt(n/2)][n-1-i] + 1
                    }
                    break;
                case 2:
                    // 아
                    for (let i = 0; i < n-1; i++) {
                        answer[n-1][n-1-i] = i+1
                    }
                    for (let i = 0; i < parseInt(n/2); i++) {
                        answer[n-2-i][1] = answer[n-1-i][1] + 1
                    }
                    break;
                case 3:
                    // 왼
                    for (let i = 0; i < n-1; i++) {
                        answer[n-1-i][0] = i+1
                    }
                    for (let i = 0; i < parseInt(n/2); i++) {
                        answer[1][i+1] = answer[1][i] + 1
                    }
                    break;
                default:
                    break;
            }
        }
        if (parseInt(n/2) %2 === 0) {
            answer[parseInt(n/2)][parseInt(n/2)] =  answer[parseInt(n/2)][parseInt(n/2)-1] + 1;
        }
    }
    // 반시계방향
    else {

    }

    return answer;
}
console.log(solution(num,clockwise));