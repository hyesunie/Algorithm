function solution(numbers) {
  numbers.sort((a, b) => {
    let num1 = String(a);
    let num2 = String(b);

    return num1 + num2 - (num2 + num1);
  });
  let answer = "";

  for (let i = numbers.length - 1; i >= 0; i--) {
    answer += String(numbers[i]);
  }

  answer.split("", 1)[0] === "0" ? console.log("0") : console.log(answer);
}

solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);
solution([123, 13, 2, 3, 14, 99, 51, 5]);
solution([0, 0, 0]);
