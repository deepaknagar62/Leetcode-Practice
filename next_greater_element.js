/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    n = arr.length;
    maxValue = -1;  // this code write the next greater elements to the array
    var ans = [];

   for(var i=n-1; i>=0; i--){
        ans[i] = maxValue;

       if(arr[i] >=maxValue){
           maxValue = arr[i];
       }

   }
   
   return ans;
};