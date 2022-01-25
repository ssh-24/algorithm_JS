let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

let N = Number(input[0])
let dn_num_array = []

// 분해합 구하는 함수
function d(n) {
    let number = Number(n)
    let number_div = n.toString().split('').map(item => Number(item))
    let result = 0

    for (let i = 0; i < number_div.length; i++) {
        result = result + number_div[i]
    }
    result = number + result
    return result
}

for (let i = 1; i <= N; i++) {
    if (d(i)===N) {
        dn_num_array.push(i)
    }
}

// 배열이 비지 않았다면
if (dn_num_array.length) {
    console.log(Math.min.apply(null,dn_num_array));
} else {
    console.log(0);
}