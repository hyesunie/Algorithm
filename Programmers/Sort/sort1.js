// function solution(array, commands) {
//   let answer = [];

//   for (let key in commands) {
//     let i = commands[key][0];
//     let j = commands[key][1];
//     let k = commands[key][2];

//     let result = array.slice(i - 1, j);

//     if (result.length > 1) result.sort((a, b) => a - b);

//     answer.push(result[k - 1]);
//   }

//   console.log(answer);
// }

function solution(array, commands) {
  let answer = [];
  let sliceArray = [];

  while (commands.length !== 0) {
    let command = commands.shift();
    let i = command[0] - 1;
    let j = command[1];
    let k = command[2] - 1;

    answer.push(array.slice(i, j).sort((a, b) => a - b)[k]);
  }

  console.log(answer);
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
