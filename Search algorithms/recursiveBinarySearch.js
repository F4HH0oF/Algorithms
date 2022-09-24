function recursiveBinarySearch(array, target){
    return binarySearch(array, target, 0, array.length-1);
}

function binarySearch(array, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex) return -1
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    
    if(target === array[middleIndex]) return middleIndex;

    if(target < array[middleIndex]) return binarySearch(array, target, leftIndex, middleIndex - 1);
     else return binarySearch(array, target, middleIndex + 1, rightIndex);
}




console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 4)); //2
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); //-1

//Big-O(logn)