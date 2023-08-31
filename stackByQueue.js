

var MyStack = function() {
    this.q=[];          
};


MyStack.prototype.push = function(x) {
   this.q.push(x);       
};


MyStack.prototype.pop = function() {
   if(this.q.length==0){
       return null;
   }
  return this.q.pop();    
};


MyStack.prototype.top = function() {
    if(this.q.length==0){
       return null;
   }
   return this.q[this.q.length-1];
};


MyStack.prototype.empty = function() {
   return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */