/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {    

    const sortedArray = [];
    let next = list1;

    while(next) {
        let val = next.val;
        sortedArray.push(val);
        
        next = next.next
    }

    next = list2;

    while(next) {
        let val2 = next.val;
        sortedArray.push(val2);
        
        next = next.next
    }

    const sortedList = new ListNode(null);  
    
    if(sortedArray.length > 0) {
        sortedArray.sort((a, b) => a - b);
        sortedList.val = sortedArray[0];
        next = sortedList;
        for(let i = 0; i < sortedArray.length; i++) {
            if(sortedArray[i + 1] !== undefined) {            
                next = next.next = new ListNode(sortedArray[i+1]);
            }
        }
    } 

    if(!list1 && !list2) {
        return sortedList.next;
    }

    return sortedList;
};