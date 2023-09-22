/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    let deficit = 0;
    let balance = 0;
    let start = 0 ;
    let n = gas.length;
    for(let i=0; i<n; i++){
        balance += gas[i] - cost[i];
        if(balance < 0){
            deficit += balance;
            start = i+1;
            balance = 0;
        }
    }

    if(deficit + balance >=0){
        return start;
    }
    else{
        return -1;
    }
};