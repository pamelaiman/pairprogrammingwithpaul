/**
 * function is given an array, it uses callbackFn on every member of array and pushes into new array
 * @param {array} inputArray 
 * @param {function} callbackFn 
 * @returns {array} 
 */

function ourMap(inputArray, callbackFn) {
    const newArray = []
    for (let i of inputArray) {
        newArray.push(callbackFn(i))
    }
    return newArray;
}

export { ourMap }