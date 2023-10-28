/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let max = Number.MIN_VALUE;
    let ans = 0;
    for(let i=0; i<nums.length; i++){
        if(max < nums[i]){
            max = nums[i];
        }
    }

    for(let i=1; i<=max+1; i++){
        if(!nums.includes(i)){
               ans = i;
               break;
        }
    }

    return ans;
};