/**
* Pseudocode:
*
* function name: ourMap
* parameters: callbackFn {function}, inputArray {array of anything}
* return: newArray {array}
*
* Loop through INPUTARRAY, do function on each element of the array
* Then push into NEWARRAY
* Return NEWARRAY
*
*/

function ourMap(inputArray, callbackFn) {
    const newArray = []
    for (let i of inputArray) {
        newArray.push(callbackFn(i))
    }
    return newArray;
}

export { ourMap }