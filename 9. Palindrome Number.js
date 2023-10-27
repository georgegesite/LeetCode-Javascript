/**
 * @param {number} 
 * @return {boolean}
 */
var isPalindrome = function(x) {
    y = String(x);
    z = y.split('').reverse().join('');
    if(z === y) return true; else return false;
};