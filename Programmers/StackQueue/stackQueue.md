# 기능개발 (stackQueue1.js)
----
    1. 조건
        - 순서대로 작업의 진도가 적힌 배열 `progressess`, 개발 속도가 적힌 배열 `speeds`
        - 뒤에 있는 기능이 먼저 개발 되더라도 앞에 있는 기능이 배포될 때 함께 배포 함
        - 각 배포마다 몇 개의 기능이 배포되는 지를 `return`
    2. 문제 풀이
        - 100-`progressess`/`speeds` 를 해서 언제 배포가 될 수 있는 지 구한 후 `progressess`에 넣음/
        - `start` 값을 `progressess`의 첫번째 값으로 지정하고 `temp` 배열에 push함
        - `start` 보다 큰 수가 나올 때 까지 `temp`에 push 함 
        - `start`본다 큰 `current`가 나오면 `temp`의 길이를 `answer` 배열에 push 하고 `temp`를 초기화 함


# 크레인 인형뽑기 게임 (stackQueue4.js)
----
    1. 문제 풀이
        - `moves`의 길이만큼 반복, `moves`엘리먼트-1 : col
        - `board`의 길이만큼 반복
        - `board[][col]` 값이 `0` 이면 `continue`
        - 아니면 다음 행동으로 넘어감  
        - `stack.pop()`과 현재 뽑은 숫자를 비교해서 같으면 `cnt +=2` 하고 `break`
        - 아니면 다시 스택에 넣고 `break`
  
[프로그래머스 페이지](https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript)