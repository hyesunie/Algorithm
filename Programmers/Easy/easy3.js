function solution(rows, columns, queries) {
  var answer = [];

  let arr = Array.from(Array(rows), () => new Array(columns));
  let n = 1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = n;
      n++;
    }
  }

  while (queries.length > 0) {
    let [x1, y1, x2, y2] = queries.shift();
    x1--;
    y1--;
    x2--;
    y2--;

    let tmp1 = arr[x1][y2];
    let min = tmp1;
    for (let i = y2 - 1; i >= y1; i--) {
      if (min > arr[x1][i]) min = arr[x1][i];
      arr[x1][i + 1] = arr[x1][i];
    }
    for (let i = x1 + 1; i <= x2; i++) {
      if (min > arr[i][y1]) min = arr[i][y1];
      arr[i - 1][y1] = arr[i][y1];
    }
    for (let i = y1 + 1; i <= y2; i++) {
      if (min > arr[x2][i]) min = arr[x2][i];
      arr[x2][i - 1] = arr[x2][i];
    }
    for (let i = x2 - 1; i > x1; i--) {
      if (min > arr[i][y2]) min = arr[i][y2];
      arr[i + 1][y2] = arr[i][y2];
    }

    arr[x1 + 1][y2] = tmp1;

    answer.push(min);
  }

  return answer;
}
