function solution(length, weight, trucks) {
  let bridge = new Array(length).fill(0);
  let bridgeWeight = -1;
  let cnt = 0;

  while (bridgeWeight !== 0) {
    if (bridgeWeight === -1) bridgeWeight = 0;

    bridgeWeight -= bridge.shift();
    let wait = trucks.shift();

    if (bridgeWeight + wait <= weight) {
      bridge.push(wait);
      bridgeWeight += wait;
    } else {
      bridge.push(0);
      trucks.unshift(wait);
    }
    cnt++;
  }

  console.log(cnt);
}

solution(2, 10, [7, 4, 5, 6]);
solution(5, 5, [2, 2, 2, 2, 1, 1, 1, 1, 1]);

// function Node(firstData) {
//     this.data = firstData;
//     this.prev = null;
//     this.next = null;
// }

// // first out last in
// function Queue() {
//     this.first = null;
//     this.last = null;

//     this.enqueue = function(node) {
//         if (this.first === null) {
//             this.first = node;
//             this.first.next = node;
//             this.last = node;
//             this.last.prev = node;
//         } else if (this.first === this.last) {
//             this.first.prev = null;
//             this.first.next = node;
//             this.last = node;
//             this.last.prev = this.first;
//             this.last.next = null;
//         } else if (this.last !== null) {
//             var temp = this.last;
//             temp.next = node;
//             this.last = node;
//             this.last.prev = temp;
//         }
//     }

//     this.dequeue = function() {
//         var returnValue = this.first.data;

//         if (this.first === this.last) {
//             this.first = null;
//             this.last = null;
//         } else if (this.first !== this.last) {
//             this.first = this.first.next;
//         }

//         return returnValue;
//     }

//     this.length = function() {
//         if (this.first === null)
//             return 0;
//         else if (this.first === this.last) {
//             return 1;
//         } else if (this.first !== this.last) {
//             var count = 1, node = this.first;

//             while (node.next !== null) {
//                 node = node.next;
//                 count++;
//             }

//             return count;
//         }
//     }

//     this.sum = function() {
//         if (this.first === null)
//             return 0;
//         else if (this.first === this.last) {
//             return this.first.data;
//         } else if (this.first !== this.last) {
//             var count = this.first.data !== -1 ? this.first.data : 0, // ??? ????????? ?????? ?????????
//                 node = this.first;

//             while (node.next !== null) {
//                 node = node.next;
//                 if (node.data !== -1) // ??? ????????? ?????? ????????? ?????????
//                     count += node.data;
//             }

//             return count;
//         }
//     }
// }

// function solution(bridge_length, weight, truck_weights) {
//     var answer = 0, truck_length = truck_weights.length,
//         q = new Queue(), end = 0;

//     var i = 0;
//     for (; i < bridge_length; i++)
//         q.enqueue(new Node(-1));

//     while (end !== truck_length) {
//         // move truck
//         answer++;
//         end += q.dequeue() !== -1 ? 1 : 0;

//         // add truck
//         q.enqueue(new Node(q.sum() + truck_weights[0] <= weight ? truck_weights.shift() : -1));
//     }

//     return answer;
// }
