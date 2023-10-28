class Solution {
    public char findTheDifference(String s, String t) {
        int[] sCount = new int[26];
        int[] tCount = new int[26];
        char ans = 'a';

        for(int i=0; i<s.length(); i++){
            sCount[s.charAt(i)-'a']++;
        }
        for(int i=0; i<t.length(); i++){
            tCount[t.charAt(i)-'a']++;
        }
        
        int i=0;
        while(i<26){
            if( sCount[i] != tCount[i]){
                ans = (char)(i + 97);
            }
            i++;

        }
       return ans;
    }
}