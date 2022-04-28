// 조합
let input = [1,2,3,4]
let output = []
let count = 0;

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
console.log("========================");


count = 0;
// 재귀
const combination2 = (arr, data, s, idx, r) => {
    if (s === r) {
        count++;
        console.log(data);
        return;
    }

    for (let i = idx; arr.length - i >= r - s; i++) {
        data[s] = arr[i];
        combination2(arr,data,s+1,i+1,r);
    }
}

combination2(input,output,0,0,2);
console.log(count);