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

const range = 10000
let self_numbers = Array(range + 1).fill(true)

for (let i = 0; i <= range; i++) {
    self_numbers[d(i)] = false;
}

for (let i = 0; i < range; i++) {
    if(self_numbers[i]) {
        console.log(i)
    }
}