/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    for(let i = 1; i <= numRows; i++) {
        result.push(new Array(i).fill(1));
    }

    for(let i = 0; i < result.length; i++) {
        const item = result[i];
        for(let c = 0; c < item.length; c++) {
            if(item[c+1]) {
                if(result[i+1]) {
                    result[i+1][c+1] = item[c] + item[c+1]
                }
            }
        }
    }
    
    return result;
};