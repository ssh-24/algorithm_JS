```
문제에서 두 묶음씩 골라 합쳐나가기 때문에, 
합쳐진 묶음과 또 다른 묶음을 합치게 된다.
그래서 묶음을 합쳐나가는 각 경우마다 카드의 수가 
가장 적은 두 묶음을 합치면 카드들을 최소로 비교하면서
한 묶음으로 합칠 수 있다.
각 경우마다 카드의 개수가 가장 적은 두 묶음을 파악해야 하기 때문에
최소 힙을 이용하기에 적합하다.
최소 힙은 노드 삽입에 O(logn) 시간이,
삭제에 O(1) 시간이 걸리기 때문에 최소 힙을 이용해 알고리즘을 구현하면
시간 복잡도가 O(nlogn)이 되어 최악의 경우에도 시간 내에 답을 도출할 수 있다.
```

let fs = require('fs')
// let input = fs.readFileSync('dev/stdin').toString().split('\n').map(Number)
let input = fs.readFileSync('예제.txt').toString().split('\n').map(Number)

const N = input.shift();
let answer = 0;

// 최소힙 구현
class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    getLength = () => {
      return this.heap.length;
    };
  
    push = (node) => {
      this.heap.push(node);
      let i = this.heap.length - 1;
      let parentI = Math.floor((i - 1) / 2);
      while (i > 0 && this.heap[parentI] > this.heap[i]) {
        this.swap(i, parentI);
        i = parentI;
        parentI = Math.floor((i - 1) / 2);
      }
    };
  
    pop = () => {
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const result = this.heap[0];
      this.heap[0] = this.heap.pop();
      let i = 0;
      while (true) {
        const leftI = i * 2 + 1,
          rightI = i * 2 + 2;
        if (leftI >= this.heap.size) {
          break;
        }
        let nextI = i;
        if (this.heap[nextI] > this.heap[leftI]) {
          nextI = leftI;
        }
        if (rightI < this.heap.length && this.heap[nextI] > this.heap[rightI]) {
          nextI = rightI;
        }
        if (nextI === i) {
          break;
        }
        this.swap(i, nextI);
        i = nextI;
      }
      return result;
    };
  
    swap = (a, b) => {
      const temp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = temp;
    };
}

// minHeap 생성
const minHeap = new MinHeap();
// minHeap에 값 push
for (let i = 0; i < N; i++) {
    minHeap.push(input[i]);
}

// 하나 남을때까지 반복
while (minHeap.getLength() > 1) {
    let aCount = minHeap.pop();
    let bCount = minHeap.pop();
    let sum = aCount + bCount;
    answer += sum;
    minHeap.push(sum);
}

console.log(answer);