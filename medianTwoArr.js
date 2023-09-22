/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [];
    let i=0;
    let j=0;
    let k=0;
    let n = nums1.length;
    let m = nums2.length;

    while(i<n && j<m){
       
       if(nums1[i] <=nums2[j]){
           newArr[k++] = nums1[i++];
       }
       else{
           newArr[k++] = nums2[j++];
       }

    }

    while(i<n){
        newArr[k++] = nums1[i++];
    }
    
    while(j<m){
        newArr[k++] = nums2[j++];
    }

    if(newArr.length%2==0){
        let mid = Math.floor(newArr.length/2);
        let ans = (newArr[mid] + newArr[mid-1])/2;

        return ans;
    }
    else{
        let mid = Math.floor(newArr.length/2);
        let ans = newArr[mid];

        return ans;
    }
    
};