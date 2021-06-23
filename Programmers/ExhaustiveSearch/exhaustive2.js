function solution(numbers) {
  let arr = numbers.split("");
  let answer = new Set();

  const recur = (arr, str1) => {
    for (let i = 0; i < arr.length; i++) {
      let temp = [...arr];

      let str2 = temp.splice(i, 1);
      let nextStr = str1 + str2;
      let trasNum = parseInt(nextStr);

      if (isPrime(trasNum)) {
        if (!answer.has(trasNum)) answer.add(trasNum);
      }

      recur(temp, nextStr);
    }
  };

  const isPrime = (num) => {
    //         let check =[2,3,5,7];
    //         if(num < 2) return false;

    //         for(let j=0; j<4; j++){
    //             if(num===check[j]) return true;
    //             if(num%check[j]===0)return false;
    //         }

    //         return true;
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  recur(arr, "");

  return answer.size;
}
solution("17");
solution("011");
