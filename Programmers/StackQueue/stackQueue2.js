function solution(priorities, location) {
  let arridx = [];
  let answer = [];

  arridx = priorities.map((_, index) => index);

  while (true) {
    if (arridx.length === 0) break;

    let idx = arridx[0];
    let num = priorities[idx];

    let findmaxnum = (item) => num < item;
    let maxNum = priorities.find(findmaxnum);
    console.log(arridx, num, maxNum);

    if (maxNum === undefined) {
      priorities[idx] = -1;
      answer.push(arridx.shift());
    } else {
      arridx.push(arridx.shift());
    }
  }

  console.log(answer.findIndex((item) => location === item) + 1);
}

solution([2, 1, 3, 2], 2);
solution([1, 1, 9, 1, 1, 1], 0);
solution([1, 3, 1, 3], 3);
