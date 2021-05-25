function solution(n, lost, reserve) {
  let answer = n - lost.length;

  lost.forEach((item, index) => {
    const idx = reserve.findIndex((element) => {
      return element === item;
    });
    if (idx !== -1) {
      lost[index] = -3;
      reserve[idx] = -3;
      answer++;
    }
  });

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j] - 1 || lost[i] === reserve[j] + 1) {
        answer++;
        reserve[j] = -3;
        lost[i] = -3;

        break;
      }
    }
  }

  console.log(answer);
}

solution(5, [2, 4], [1, 3, 5]);
solution(5, [2, 4], [3]);
solution(3, [3], [1]);
solution(5, [2, 3, 4], [3, 5]);
