/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let rows = [[1]];

    for(let i = 0; i < rows.length; i++) {
        const row = rows[i];
        rows.push([...row, 1]);

        for(let r = 0; r < row.length; r++) {        

            if(row[r + 1]) {
                rows[i+1][r+1] = row[r] + row[r+1];                
            }
        }
        

        if(rows[rowIndex]) {      
            return rows[rowIndex];
        }
    }
};