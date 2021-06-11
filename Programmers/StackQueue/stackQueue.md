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