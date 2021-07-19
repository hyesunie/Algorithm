function solution(record) {
  let answer = [];
  let id = {};
  let obj = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  let arr = record.map((item) => {
    let temp = item.split(" ");
    if (temp.length === 2) return temp;
    id[temp[1]] = temp[2];
    return temp;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === "Change") continue;

    let str = id[arr[i][1]] + obj[arr[i][0]];
    answer.push(str);
  }

  return answer;
}
