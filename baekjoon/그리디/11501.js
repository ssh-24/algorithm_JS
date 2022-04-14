```
메모리 초과, 파이썬으로 제출함
핵심 아이디어
    - 거꾸로 봐서 현재보다 큰 것이 있으면 Max 갱신
    - 큰 것이 없다면 Max에서 빼준 값을 profit에 누적
```

let fs = require('fs')
// let input = fs.readFileSync('dev/stdin').toString().split('\n')
let input = fs.readFileSync('예제.txt').toString().split('\n')

const T = Number(input.shift())

const solution = (arr) => {
    let num = 1;
    for (let i = 0; i < T; i++) {
        const priceList = [];
        let MaxPrice = 0; // 최고가
        let profit = 0; // 이익

        for (let i = 0; i < Number(arr[num-1]); i++) {
            priceList.unshift(arr[num].split(' ').map(Number)[i]);
        }
        num+=2;
        MaxPrice = priceList[0]

        for (let i = 0; i < priceList.length; i++) {
            if (MaxPrice >= priceList[i]) {
                profit += MaxPrice - priceList[i];
            }
            else {
                // 큰게 있다면 최고가 갱신
                MaxPrice = priceList[i];
            }
        }
        // 각 최대 이익 출력
        console.log(profit);
    }
}

solution(input)