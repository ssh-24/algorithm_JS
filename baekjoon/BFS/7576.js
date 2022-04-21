```
토마토 - BFS 풀이
```
let fs = require("fs");
let tomato = fs.readFileSync("예제.txt").toString().split("\n");
// let tomato = fs.readFileSync("dev/stdin").toString().split("\n");
tomato = tomato.map((element) => element.trim().split(" "));
const row = Number(tomato[0][1]); // 세로: 행
const column = Number(tomato[0][0]); // 가로: 열
tomato.shift();

const ripeTomato = Array.from(new Array(row), () => new Array(column).fill(0));
const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];
let answer;

const rangeCheck = (r, c) => {
  if (r >= 0 && r < row && c >= 0 && c < column) {
    return true;
  }
  return false;
};

const BFS = (queue) => {
  let number = 0;
  while (number !== queue.length) {
    const currentRow = queue[number][0];
    const currentCol = queue[number][1];
    for (let n = 0; n < 4; n++) {
      const nextRow = currentRow + moveRow[n];
      const nextCol = currentCol + moveCol[n];
      if (
        rangeCheck(nextRow, nextCol) &&
        !ripeTomato[nextRow][nextCol] &&
        Number(tomato[nextRow][nextCol]) === 0
      ) {
        queue.push([nextRow, nextCol]);
        ripeTomato[nextRow][nextCol] = ripeTomato[currentRow][currentCol] + 1;
        answer = ripeTomato[nextRow][nextCol];
      }
    }
    number++;
  }
  answer = answer - 1;
};

const queue = [];
let zero = false;

for (let r = 0; r < row; r++) {
  for (let c = 0; c < column; c++) {
    if (Number(tomato[r][c]) === 1) {
      queue.push([Number(r), Number(c)]);
      ripeTomato[Number(r)][Number(c)] = 1;
    } else if (Number(tomato[r][c]) === -1) {
      ripeTomato[Number(r)][Number(c)] = -1;
    } else if (Number(tomato[r][c]) === 0) {
      zero = true;
    }
  }
}

if (!zero) {
  answer = 0;
} else {
  BFS(queue);
  for (let i = 0; i < ripeTomato.length; i++) {
    if (ripeTomato[i].includes(0)) {
      answer = -1;
      break;
    }
  }
}

// console.log(ripeTomato);
console.log(answer);