function solution(orders, course) {
  var answer = [];
  let set = new Set();
  orders = orders.map((order) => order.split("").sort().join(""));

  const check = (arr) => {
    let cnt = 0;
    orders.forEach((item) => {
      for (let idx = 0; idx < arr.length; i++) {
        if (!item.includes(arr[idx])) return;
      }
      cnt++;
    });

    let str = arr.join("");
    answer.push({ str, cnt });
    arr.forEach((item) => {
      set.add(item);
    });
  };

  const recur = (c, arr, order) => {
    if (arr.length === c) {
      for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) return;
      }
      console.log("dd");
      check(arr);
      return;
    }
    let temp = order;

    for (let i = 0; i < order.length; i++) {
      let str = temp.substr(i, 1);
      arr.push(str);
      temp = temp.replace(temp.substr(i, 1), "");

      recur(c, arr, temp);
      temp = order;

      arr.pop();
    }
  };

  for (let i = 0; i < course.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      recur(course[i], [], orders[j]);
    }
  }

  console.log(answer);
}

solution(["XYZ", "XWY", "WXA"], [2]);
