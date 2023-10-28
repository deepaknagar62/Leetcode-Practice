/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let ans = 0;
    let count = 0;
    for(let i=9; i>=0; i--){
        if(s.includes(i.toString())){
            count++;
            ans = i;
        }
        if(count == 2){
            return ans;
        }
    }

    if(count < 2){
        return -1;
    }
};