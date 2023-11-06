/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let lastWord = ' ';
    let words = s.split(' ');
    
    for(let i = words.length - 1; i >= 0; i--) {
        if(words[i] !== '') {
            lastWord = words[i];
            break;            
        }
    }

    return lastWord.length;    
};