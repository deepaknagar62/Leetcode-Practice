/*
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

  var createCounter = function(init) {
       let pcount = init;
    return {
        increment:()=> ++pcount,
        decrement:()=> --pcount,
        reset:()=> pcount = init,
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */