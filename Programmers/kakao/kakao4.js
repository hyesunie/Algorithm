function solution(N, stages) {
    var answer = [];
    stages.sort((a,b)=>a-b);
    
    let i=1;
    while(i<=N){
        let cnt=0;
        let dir=0;
        stages.forEach((e,idx)=>{
            if(e!==i)return;
            cnt++;
            dir = idx;
        });

        let fail = cnt/(stages.length-(dir+1 -cnt));
        let obg = {id:i, ratio:fail};
        answer.push(obg);
        
        i++;
    }
    
    answer=answer.sort((a,b)=> b.ratio-a.ratio).map((e)=>e.id);
    
    return answer;
}