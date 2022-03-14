// test case
let lottos = [44,1,0,0,31,25];
let win_nums = [31,10,45,1,6,19];

// my solution
function solution(lottos, win_nums) {
    var answer = [];

    let min_match = 0;
    let unknown_count= 0;

    let index = 0;
    while (true) {
        if (index > 5) break;
        if (lottos[index] === 0) {
            unknown_count++;
        }
        index++;
    }

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (win_nums[j] === lottos[i]) {
                min_match++;
            }
        }
    }

    const getRanks = (min, unknown) => {
        let best, worst;
        switch (min) {
            case 6:
                worst = 1;
                break;
            case 5:
                worst = 2;
                break;
            case 4:
                worst = 3;
                break;
            case 3:
                worst = 4;
                break;
            case 2:
                worst = 5;
                break;
            default:
                worst = 6;
                break;
        }

        best = worst - unknown
        if (best < 1) {
            best = 1;
        }

        return [best, worst];
    }

    answer = getRanks(min_match, unknown_count);

    return answer;
}

console.log(solution(lottos,win_nums));

// another solution
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}