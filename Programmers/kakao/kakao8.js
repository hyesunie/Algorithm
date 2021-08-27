function solution(s) {
    let obg = {}
    let answer= [];
    let cArr = [];
    let arr =s.replace(/[\{\}]/g,"").split(",").sort();
    let set = new Set(arr);

    for(let i of set) {
        let temp = arr.filter((e) => e===i)
        obg[temp.length] = i;
        cArr.push(temp.length);
    }

    cArr.sort((a,b)=>b-a);

    while(cArr.length > 0){
        answer.push(Number(obg[cArr.shift()]));
    }

    return answer;
}