// 순열
let input = ['a', 'b', 'c']
let count = 0

const permutaion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue
            for (let k = 0; k < arr.length; k++) {
                if (i == k) continue
                if (j == k) continue

                console.log(arr[i], arr[j], arr[k]);
                count++;
            }
        }
    }
}

permutaion(input);
console.log(count);