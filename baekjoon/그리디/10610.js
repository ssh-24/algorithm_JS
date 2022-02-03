let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
// let input = fs.readFileSync('예제.txt').toString().trim().split('\n')
// trim().split('\n') 빼먹으니까 틀렸다고 함;;;

let arr = input[0].split('').map(Number).sort((a,b)=>b-a) // 내림차순 숫자 배열

let sum = 0 // 자릿수 합
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

// 0을 포함할때만 (10의 배수)
// 자릿수 합이 3의 배수일때만(3의 배수)
if ((arr[arr.length-1] === 0) && (sum % 3 === 0)) {
    console.log(arr.join(''));
}
else {
    console.log('-1');
}