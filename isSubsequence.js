/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let n = s.length;
      let m = t.length;
      let i=0,j = 0;

      while(i<n && j<m){

          if(s[i] == t[j]){
              i++;
              j++;
          }
          else{
              j++;
          }
      }

      if(i==n) return true;
      else return false;
};