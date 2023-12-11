/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    
    const common = [];
    let lastIndex;
    for(let i = 0; i < list1.length; i++) {
        for(let c = 0; c < list2.length; c++) {            
            if(list1[i] === list2[c]) {                
                if((i + c) > lastIndex) {
                    continue;
                }

                if((i + c) < lastIndex) {
                    common.pop();
                }

                common.push(list1[i]);                
                lastIndex = i + c;
            }
        }
        
    }
    return common;
};