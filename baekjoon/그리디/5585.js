let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString()
// let input = fs.readFileSync('예제.txt').toString()

const money = 1000 // 지불한 돈
let price = Number(input) // 물건 가격
let ans = 0 // 동전 갯수
let change = money - price // 줘야할 거스름 돈
const en500 = 500
const en100 = 100
const en50 = 50
const en10 = 10
const en5 = 5
const en1 = 1

while (change !== 0) {
    if (change >= en500) {
        ans += parseInt(change/en500)
        change = change%en500
    }
    else if (change >= en100) {
        ans += parseInt(change/en100)
        change = change%en100
    }
    else if (change >= en50) {
        ans += parseInt(change/en50)
        change = change%en50
    }
    else if (change >= en10) {
        ans += parseInt(change/en10)
        change = change%en10
    }
    else if (change >= en5) {
        ans += parseInt(change/en5)
        change = change%en5
    }
    else if (change >= en1) {
        ans += parseInt(change/en1)
        change = change%en1
    }
}

console.log(ans);