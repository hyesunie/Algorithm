function solution(clothes) {
  let answer = 1;
  let obj = {};

  for (let i = 0; i < clothes.length; i++) {
    if (!obj[clothes[i][1]]) {
      obj[clothes[i][1]] = 2;
      continue;
    }
    obj[clothes[i][1]] += 1;
  }

  for (let key in obj) {
    answer *= obj[key];
  }

  console.log(answer - 1);
}

solution([
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

solution([
  ["crowmask", "face"],
  ["bluesunglasses", "face"],
  ["smoky_makeup", "face"],
]);
