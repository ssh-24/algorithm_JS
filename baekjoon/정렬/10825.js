let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
// let input = fs.readFileSync('예제.txt').toString().split('\n')

let N = Number(input.shift())
let arr = []
for (let i = 0; i < N; i++) {
    arr.push(input[i].trim().split(' '))
}

let names = []

// 정렬
arr.sort((a,b) => {
    if (Number(a[1]) < Number(b[1])) return 1
    else if (Number(a[1]) > Number(b[1])) return -1
    else {
        if (Number(a[2]) > Number(b[2])) return 1
        else if (Number(a[2]) < Number(b[2])) return -1
        else {
            if (Number(a[3]) < Number(b[3])) return 1
            else if (Number(a[3]) > Number(b[3])) return -1
            else {
                if (a[0]>b[0]) return 1
                else if (a[0]<b[0]) return -1
                else return 0
            }
        }
    }
})

// 출력
arr.forEach(e => names.push(e[0]))
console.log(names.join('\n'));