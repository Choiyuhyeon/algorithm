/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const tarr = [];
    for (let i=0; i<arr.length; i++){
        tarr[i] = fn(arr[i],i);
    }

    return tarr;

};