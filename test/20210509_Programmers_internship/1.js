function solution(code, day, data) {
  let arr = [];
  let dataArr = [];
  let result = [];

  data.forEach((element, index) => {
    let str1 = element.split(" ")[0];
    let str2 = element.split(" ")[1];
    let str3 = element.split(" ")[2];

    dataArr.push(str1.split("="));
    dataArr.push(str2.split("="));
    dataArr.push(str3.split("="));

    arr.push(dataArr);
    dataArr = [];
  });

  arr.sort((a, b) => {
    return a[2][1] - b[2][1];
  });

  const globalRegex = new RegExp(`${day}`, "i");
  const codeRegex = new RegExp(`${code}`, "i");

  for (const key in arr) {
    if (globalRegex.test(arr[key][2][1]) && codeRegex.test(arr[key][1][1])) {
      result.push(parseInt(arr[key][0][1]));
    }
  }
  console.log(result);
}

solution("012345", "20190620", [
  "price=80 code=987654 time=2019062113",
  "price=90 code=012345 time=2019062014",
  "price=120 code=987654 time=2019062010",
  "price=110 code=012345 time=2019062009",
  "price=95 code=012345 time=2019062111",
]);
