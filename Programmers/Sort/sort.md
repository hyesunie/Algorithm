# K번째 수 (sort1.js)
----
    1. 조건
        - array를 commands[i,j,k] i번쨰 원소 부터 j번쨰 원소까지 새로운 배열을 만듦
        - 정렬 후 k번쨰 인자가 답. 
    2. 문제 풀이
        - slice 함수를 이용해서 새로운 배열을 생성함
        - sort 함수를 이용해서 정렬
        - 정렬한 함수[k-1]를 answer 배열에 push함