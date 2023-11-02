/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    const word = strs[0];
    let prefix = '';
    let foundPrefix = '';
    for(let i = 0; i < word.length; i++) {
        prefix += word[i];
        let hasPrefix = true;
        for(let c = 0; c < strs.length; c++) {
            if(strs[c].substring(0, (prefix.length)).indexOf(prefix) === -1) {
                hasPrefix = false;
                prefix = '';
            }
        }
        if(hasPrefix) {            
            if(!foundPrefix || (foundPrefix && foundPrefix.length < prefix.length)) {
                foundPrefix = prefix;
            }
        }
    }

    console.log(foundPrefix)

    return foundPrefix;
};