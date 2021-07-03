function solution(info, query) {
  var answer = new Array(query.length);

  info = info.map((item) => {
    let temp = item.split(" ");
    temp[4] = Number(temp[4]);
    return temp;
  });
  query = query.map((item) => {
    let temp = item.split(" and ");
    let score = temp[3].split(" ");
    temp[3] = score[0];
    temp.push(Number(score[1]));
    return temp;
  });
  info.sort((a, b) => b[4] - a[4]);
  let i = 0;
  while (i < query.length) {
    let cnt = 0;
    let condition = query[i];

    for (let i = 0; i < info.length; i++) {
      let check = true;
      if (condition[4] > info[i][4]) break;
      for (let j = 0; j < 4; j++) {
        if (condition[j] !== "-" && info[i][j] !== condition[j]) {
          break;
        }
        if (j === condition.length - 2) {
          if (info[i][j + 1] >= condition[j + 1]) cnt++;
          else check = false;
        }
      }
      if (!check) break;
    }

    answer[i] = cnt;
    i++;
  }

  return answer;
}
