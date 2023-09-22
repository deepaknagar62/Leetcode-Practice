/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch=function(nums,s,e,target){
    if(s>e) return -1;
    let mid = Math.floor((s+e)/2);
    if(nums[mid] == target) return mid;

    if(nums[mid] < target){
        return binarySearch(nums,mid+1,e,target);
    }
    else{
        return binarySearch(nums,s,mid-1,target);
    }

}

var search = function(nums, target) {
 
 return binarySearch(nums,0,nums.length-1,target);
};