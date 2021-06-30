function solution(board, moves) {
  let stack = [0];
  let cnt = 0;

  for (let i of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i - 1] === 0) continue;
      let num = board[j][i - 1];
      board[j][i - 1] = 0;

      let stackNum = stack.pop();
      if (num === stackNum) {
        cnt += 2;
        break;
      }
      stack.push(stackNum);
      stack.push(num);
      break;
    }
  }
  return cnt;
}
