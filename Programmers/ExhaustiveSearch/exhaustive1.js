function solution(answers) {
  const numObj = {
    num1: [1, 2, 3, 4, 5],
    num2: [2, 1, 2, 3, 2, 4, 2, 5],
    num3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  let temp = [];
  let answer = [];
  let maxCnt = 0;
  for (const key in numObj) {
    let student = numObj[key].length;
    let cnt = 0;
    for (let idx = 0; idx < answers.length; idx++) {
      let i = idx;
      if (i > student - 1) i = i % student;
      if (numObj[key][i] === answers[idx]) cnt++;
    }
    temp.push(cnt);
    if (maxCnt < cnt) maxCnt = cnt;
  }

  temp.forEach((item, index) => {
    if (item === maxCnt) answer.push(index + 1);
  });

  console.log(answer);
}
solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
