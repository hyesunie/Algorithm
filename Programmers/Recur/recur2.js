function solution(n, computers) {
  let cnt = 0;
  let stack = [0];
  let visited = new Array(n).fill(false);

  let recur = (num) => {
    if (visited[num] || stack.length === 0) return;
    for (let i = 0; i < n; i++) {
      if (computers[num][i] === 1 || computers[i][num] === 1) {
        stack.push(i);
        computers[num][i] = 0;
        computers[i][num] = 0;
      }
    }
    visited[num] = true;
    console.log(visited, computers);

    recur(stack.pop());
  };

  for (let j = 0; j < n; j++) {
    if (visited[j]) continue;
    cnt++;
    recur(j);
  }

  //   for (let i = 0; i < n; i++) {
  //     let row = computers[i];

  //     if (cnt === 1) return 1;
  //     for (let j = 0; j < n; j++) {
  //       console.log("입력", i, j);

  //       if (i === j || row[j] === 0) continue;

  //       console.log(i, j);
  //       computers[i][j] = 0;
  //       computers[j][i] = 0;

  //       set.add(j);
  //       cnt--;
  //     }
  //   }

  console.log(cnt);
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);
solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
solution(5, [
  [1, 1, 1, 0, 0],
  [1, 1, 0, 1, 0],
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
]);

solution(2, [
  [0, 0],
  [0, 0],
]);

// while (true) {
//     if (rowCheck.size === 0) return;
//     if (stack.length === 0) {
//       let iterator = rowCheck.values();
//       let row = iterator.next().value;
//       console.log(row);
//       if (visited[row] !== 1) cnt++;

//       stack.push(row);
//       visited.fill(0);
//     }
//     let i = stack.pop();
//     visited[i] = 1;

//     rowCheck.delete(i);
//     for (let j = 0; j < n; j++) {
//       if (computers[i][j] !== 1) continue;
//       computers[i][j] = 0;
//       computers[j][i] = 0;
//       stack.push(j);
//     }
//   }
