function solution(nums) {
    let result =0;
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    const recur = (sum, cnt, arr) => {
        if(cnt===3){            
            if(isPrime(sum) )result++;
            return;
        }    
        let copyArr= [...arr];
        while(copyArr.length !== 0){
            let temp =sum+copyArr[0];
            copyArr.splice(0,1);
            recur(temp, cnt+1, copyArr);
         }
    }
    
    recur(0, 0, nums);

    return result;
}

