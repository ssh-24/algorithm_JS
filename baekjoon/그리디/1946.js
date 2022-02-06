function sol(n,list) {
    let arr = [];
    for (i of list) {
        arr.push(i.split(' ').map((el)=> parseInt(el)));
    }

    arr.sort((a,b)=>a[0]-b[0])
    let temp = arr[0][1]
    let count = 1
    for (let i = 1; i < arr.length; i++) {
        if (temp > arr[i][1]) {
            temp = arr[i][1];
            count ++
        }
    }
    console.log(count);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line',function(line) {
    input.push(line)
}).on('close',function(){
    let test = parseInt(input[0]);

    let c = 1;
    let n = 0;

    let list = []
    for (let i = 0; i < test; i++) {
        n = parseInt(input[c]);
        c++
        for (let j = c; j < c+n; j++) {
            list.push(input[j]);
        }
        sol(n,list);
        c+=n;
        list = [];
    }
});