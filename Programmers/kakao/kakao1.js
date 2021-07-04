function solution(numbers, hand) {
  var answer = "";
  let keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let left = { i: 3, j: 0 };
  let right = { i: 3, j: 2 };

  while (numbers.length !== 0) {
    let input = numbers.shift();
    if (/[2580]/.test(input)) {
      let mid = { i: 0, j: 1 };
      mid.i = keypad.findIndex((item) => item[1] === input);

      let leftdis = Math.abs(mid.i - left.i) + Math.abs(mid.j - left.j);
      let rightdis = Math.abs(mid.i - right.i) + Math.abs(mid.j - right.j);

      if (leftdis > rightdis) {
        answer += "R";
        right.i = mid.i;
        right.j = mid.j;
        continue;
      }
      if (rightdis > leftdis) {
        answer += "L";
        left.i = mid.i;
        left.j = mid.j;
        continue;
      }
      if (rightdis === leftdis) {
        if (hand === "right") {
          answer += "R";
          right.i = mid.i;
          right.j = mid.j;
        } else {
          answer += "L";
          left.i = mid.i;
          left.j = mid.j;
        }
        continue;
      }
    }

    if (/[147*]/.test(input)) {
      answer += "L";
      left.i = keypad.findIndex((item) => item[0] === input);
      left.j = 0;
      continue;
    } else {
      answer += "R";
      right.i = keypad.findIndex((item) => item[2] === input);
      right.j = 2;
      continue;
    }
  }

  // if(/[369#]/.test(input))
  return answer;
}
