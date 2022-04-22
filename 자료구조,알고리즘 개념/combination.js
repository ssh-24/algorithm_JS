// 조합
let input = [1,2,3,4]
let output = []
let count = 0

// 반복문
const combination1 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            count++
            console.log(arr[i], arr[j]);
        }
    }
}
combination1(input);
console.log(count);

// 재귀