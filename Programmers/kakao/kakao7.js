const splitStr = (str) => {
  let cnt = 0;
  let idx = 0;
  for (let i = 0; i < str.length; i++) {
    cnt += str[i] === "(" ? 1 : -1;
    if (cnt === 0) {
      idx = i;
      break;
    }
  }
  return [str.substring(0, idx + 1), str.substring(idx + 1, str.length)];
};

const checkStr = (c) => {
  let stack = [];
  for (let i = 0; i < c.length; i++) {
    if (c[i] === "(") stack.push(1);
    else {
      if (!stack.length) return false;
      if (stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }
  return true;
};

const reverseStr = (r) => {
  let str = r.substring(1, r.length - 1);
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    temp += str[i] === "(" ? ")" : "(";
  }
  return temp;
};

const getResult = (w) => {
  if (!w) return "";
  if (checkStr(w)) return w;
  const [u, v] = splitStr(w);
  return checkStr(u)
    ? `${u}${getResult(v)}`
    : `(${getResult(v)})${reverseStr(u)}`;
};

function solution(p) {
  return getResult(p);
}
