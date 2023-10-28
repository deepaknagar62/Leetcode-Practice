/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let ans = [];
        let j =0;
        for(let i=0; i<nums.length; i++){
            if(nums[i]%2==0){
                ans[j++] = nums[i];
            }
        }
        for(let i=0; i<nums.length; i++){
            if(nums[i]%2 != 0){
                ans[j++] = nums[i];
            }
        }

        return ans;
};