function solution(begin, target, words) {
  var answer = [];
  if (!words.includes(target)) return 0;

  function recur(str, arr, cnt) {
    if (str === target) {
      answer.push(cnt);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let temp = [...arr];
      let word = arr[i].split("");
      let word2 = str.split("");
      let fCnt = 0;
      let idx = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[j] !== word2[j]) {
          fCnt++;
          idx = i;
        }
      }
      if (fCnt === 1) {
        cnt++;
        let next = temp.splice(idx, 1);
        recur(next[0], temp, cnt);
        cnt--;
      }
    }
  }

  recur(begin, words, 0);

  return Math.min(...answer);
}
