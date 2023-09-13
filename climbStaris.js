/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let steps = 0;
    let prev1 = 1;
    let prev2 = 0;
 
    for(let i=0; i<n; i++){
        steps = prev1 + prev2;
        prev2 = prev1;
        prev1 = steps;
    }
 
    return steps;
 
 };