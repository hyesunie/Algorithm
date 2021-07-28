function solution(d, budget) {
  d.sort((a, b) => a - b);

  let i = 0;

  while (budget - d[i] >= 0) {
    budget -= d[i];
    i++;
  }
  return i;
}
