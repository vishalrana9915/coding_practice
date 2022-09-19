/**
 * Definition for singly-linked list.
 */
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let remainder = 0;
    let resultList = new ListNode(0);
    let refList = resultList;
    while(l1 || l2){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + remainder;
        remainder = sum >= 10 ? Math.floor(sum / 10) : 0;
        let newNodeValue = sum >= 10 ? sum%10 : sum;
        console.log({remainder, sum, l: l1, n: l2,newNodeValue});
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        resultList.next = new ListNode(sum >= 10 ? sum%10 : sum);
        resultList = resultList.next;
        console.log({resultList})
    }
    
    if(remainder >0){
       resultList.next = new ListNode(remainder); 
        
    }
    console.log({refList: refList.next});
    return refList.next;
};


// console.log(addTwoNumbers([2,4,3],[5,6,4]))
// console.log(addTwoNumbers([0],[0]))
// console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))
