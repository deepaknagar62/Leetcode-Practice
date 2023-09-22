/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let s = new Set();

       
       for (let i = 0; i < mat.length; i++) {
           let count = 0;
           for (let j = 0; j < mat[i].length; j++) {
               if (mat[i][j] === 1) {
                   count++;
               }
           }

          
           s.add([count, i]);
       }

       let v = [];

       let sortedArray = Array.from(s);
       sortedArray.sort((a, b) => a[0] - b[0]);

       
       for (let i = 0; i < k; i++) {
           v.push(sortedArray[i][1]);
       }

       
       return v;
};