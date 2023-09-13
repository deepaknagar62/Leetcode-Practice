/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==1) return 1;
    let prev1 =1;
    let prev2 = 0;
    let num =0;
    for(let i=1; i<n; i++){
        num = prev1 + prev2;
        prev2 = prev1;
        prev1 = num;
    }
    return num;
};