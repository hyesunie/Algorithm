function solution(numbers, target) {
  let cnt = 0;

  function recur(num, sum) {
    if (num === numbers.length) {
      if (sum !== target) return;
      cnt++;
      return;
    }

    recur(num + 1, sum + numbers[num]);
    recur(num + 1, sum - numbers[num]);
  }

  recur(0, 0);

  console.log(cnt);
}

solution([1, 1, 1, 1, 1], 3);
