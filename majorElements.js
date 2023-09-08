/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let n = nums.length;
    nums.sort(function(a,b){return a-b;});

     let mid = Math.floor(nums.length/2);
     return nums[mid];
};