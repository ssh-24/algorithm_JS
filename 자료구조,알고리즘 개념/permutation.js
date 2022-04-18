// 순열, 완전탐색으로 많이 품
let input = ['a', 'b', 'c']
let count = 0

// 반복문으로 하는 방법 - 개수가 늘어감에 따라 비효율적
const permutaion1 = (arr) => {
    // i : 첫번째 index 위치시킬 요소 [i, ?, ?]
    for (let i = 0; i < arr.length; i++) {
        // j : 두번째 index 위치시킬 요소 [i, j, ?]
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue; // 이미 뽑은 경우 skip
            // k : 세번째 index 위치시킬 요소 [i, j, k]
            for (let k = 0; k < arr.length; k++) {
                if (i === k) continue;
                if (j === k) continue;

                console.log(arr[i], arr[j], arr[k]);
                count++;
            }
        }
    }
}

// 재귀로 하는 방법 - 일반적으로 순열 푸는 방법
const permutaion2 = (arr, s, r) => {
    // 1. 재귀함수를 멈춰야할 조건
    if (s === r) {
        count++;
        console.log(arr.join(' '));
        return;
    }

    // 2. 메인 로직 (재귀를 돌면서 변경되어야 될 부분)
    for (let i = s; i < arr.length; i++) {
        [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
        permutaion2(arr, s+1, r);
        [arr[s], arr[i]] = [arr[i], arr[s]]; // swap 다시 복귀
    }
}

// permutaion1(input);
permutaion2(input, 0, 2);

console.log(count);
