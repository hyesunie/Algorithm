function solution(key, lock) {
  let dir1 = [];
  let dir2 = [];
  let dir3 = [];
  let dir4 = [];
  let target = [];
  let n = key.length - 1;

  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (key[x][y] === 0) continue;
      dir1.push([x, y]);
    }
  }

  for (let x = 0; x < lock.length; x++) {
    for (let y = 0; y < lock.length; y++) {
      if (lock[x][y] == 1) continue;
      target.push([x, y]);
    }
  }

  for (let e of dir1) {
    let x = e[0];
    let y = e[1];
    dir2.push([y, n - x]);
    dir3.push([n - x, n - y]);
    dir4.push([n - y, x]);
  }

  let dir = [];
  dir.push(dir1, dir2, dir3, dir4);

  while (dir.length > 0) {
    let temp = dir.shift();
    for (let i = 1 - key.length; i < lock.length + key.length - 1; i++) {
      for (let j = 1 - key.length; j < lock.length + key.length - 1; j++) {
        let cnt = 0;
        let check = false;
        temp.forEach((e) => {
          if (
            e[0] + i < 0 ||
            e[0] + i > lock.length - 1 ||
            e[1] + j < 0 ||
            e[1] + j > lock.length - 1
          )
            return;
          target.some((el) => {
            if (e[0] + i === el[0] && e[1] + j === el[1]) return true;
            return false;
          })
            ? cnt++
            : (check = true);
        });
        if (check === false && cnt === target.length) return true;
      }
    }
  }
  return false;
}
