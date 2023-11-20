/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    const regex = /[a-z0-9A-Z]/i;
    const fixString = [];
    for(let i = 0; i < s.length; i++) {
        if(regex.test(s[i])) {
            fixString.push(s[i]);
        } else {
            continue;
        }
    }

    return fixString.join() === fixString.reverse().join();
};
