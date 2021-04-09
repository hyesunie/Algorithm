# 완주하지 못한 선수 (hash1.js)
------
    1. 조건
        - 한 명의 선수만 완주 못함
        - participant와 completion이 주어짐
    
    2. 풀이 방법
        - 한 명의 선수만 완주를 못했기 때문에 participant 와 completion을 비교
        - 이름의 순서가 P,C가 다르기 떄문에 arr.sort 사용하여 정렬을 먼저 해줌


[프로그래머스 페이지](https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript)




# 위장 (hash2.js)
-----
    1. 조건
        - 스파이가 가진 의상 배열(clothes)이 주어짐
        - 1개씩 입을수도 있고 여러개를 같이 입을 수도 있지만 같은 종류의 옷은 함께 입을 수 없음
    
    2. 풀이 방법
        - 경우의 수 공식을 이용하여 풀면 됨
        - 옷의 종류를 obj 객체의 property key로 지정하고 해당 종류의 옷이 몇가지 있는지를 value 값으로 넣음
        - 반복문에서 property key에 매칭되는 값이 없을 경우 
        - value에 2를 값으로 줬는데 안입을 경우 1을 미리 포함 한 것임
        - 구한 value를 다 곱한 후 -1(하나도 안입을 경우)하면 결과값이 나옴


[프로그래머스 페이지](https://programmers.co.kr/learn/courses/30/lessons/42578)