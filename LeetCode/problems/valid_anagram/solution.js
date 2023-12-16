/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let anagram = true;
    
    if(t.length !== s.length) {
        return false;
    }

    const indexes = [];
    
    for(let i = 0; i < t.length; i++) {
        const index = s.indexOf(t[i]);
        if(index === -1) {
            anagram = false;
            break;
        }      
        s = s.substring(0, index) + s.substring(index + 1, s.length);
    }

    return anagram;
};