function solution(subway, start, end) {
  let train = {};
  let obg = {};
  let answer = [];

  subway.forEach((e, i) => {
    let arr = e.split(" ");
    train[i] = arr;
    arr.forEach((el, idx) => {
      if (obg[el] === undefined) obg[el] = [];
      obg[el].push(i);
    });
  });

  function recur(c, cnt, tCnt) {
    if (train[c].includes(String(end))) {
      answer.push(cnt);
      return;
    }
    if (tCnt > subway.length) {
      return;
    }
    for (let k = 0; k < train[c].length; k++) {
      let next = Number(train[c][k]);
      if (next === start) continue;
      obg[next].forEach((e) => {
        if (e === c) return;
        cnt++;
        tCnt++;
        recur(e, cnt, tCnt);
        cnt--;
        tCnt--;
      });
    }
  }

  for (let i = 0; i < obg[start].length; i++) {
    recur(i, 0, 1);
  }
  console.log(Math.min(...answer));
}

solution(["1 2 3 4 5 6 8", "1 3 9", "7 9", "7 11"], 1, 11);
