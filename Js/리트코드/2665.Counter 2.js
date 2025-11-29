/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n = init;
    
    return {
        increment: () => ++n,
        decrement: () => --n,
        reset: ()=> n = init,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// 클로저와 화살표 함수 개념을 이용하였고, 객체 리터럴 반환 패턴을 사용함