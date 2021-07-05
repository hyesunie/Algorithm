function solution(lottos, win_nums) {
  var answer = [];
  let min = 7;
  let max = 0;

  while (win_nums.length > 0) {
    let num = win_nums.shift();
    if (lottos.includes(num)) min--;
  }
  let zeroCnt = lottos.join(",").match(/^0|\,0/g) || [];
  max = min - zeroCnt.length;
  max <= 0 ? (max = 1) : max;
  max === 7 ? (max = 6) : max;
  min === 7 ? (min = 6) : min;
  answer.push(max);
  answer.push(min);

  return answer;
}
