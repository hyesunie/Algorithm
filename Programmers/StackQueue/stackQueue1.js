function solution(progresses, speeds) {
  let temp = [];
  let answer = [];
  progresses = progresses.map((item, index) =>
    Math.ceil((100 - item) / speeds[index])
  );
  let count = 0;
  let start = progresses[0];
  temp.push(start);
  let idx = 1;
  while (idx < progresses.length) {
    let currnet = progresses[idx];
    if (start < currnet) {
      start = currnet;
      answer.push(temp.length);
      temp = [];
    }

    temp.push(currnet);
    console.log(temp);
    idx++;
  }
  answer.push(temp.length);

  console.log(answer);
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
