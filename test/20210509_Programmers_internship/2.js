function solution(t, r) {
  let ticket = [];
  let result = [];
  for (const key in t) {
    ticket.push(t[key]);
  }
  ticket.sort((a, b) => a - b);

  while (ticket.length !== 0) {
    let temp = [];

    t.forEach((element, index) => {
      if (element === ticket[0]) {
        temp.push(index);
      }
    });

    if (temp.length !== 0) {
      temp.sort((a, b) => r[a] - r[b]);
      result.push(t[temp[0]]);
      t[temp[0]] = null;
      r[temp[0]] = null;
      temp.shift();
      for (const key in temp) {
        t[temp[key]]++;
      }
    }
    ticket.shift();
    console.log(temp);

    console.log(t);
  }
  console.log(result);
}

solution([0, 1, 3, 0], [0, 1, 2, 3]);
// solution([7, 6, 8, 1], [(0, 1, 2, 3)]);
