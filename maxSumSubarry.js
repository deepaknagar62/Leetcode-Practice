

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number} 
*/
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        // code here
        let maxSum = arr[0];
        let sum = 0;
        
        for(let i=0; i<N; i++){
            sum += arr[i];
            maxSum = Math.max(sum , maxSum);
            
            if(sum < 0) sum =0;
        }
        
        
        return maxSum;
    } 
}