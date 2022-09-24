// Given a sorted array of `n` elements and a target element `t`, dind the index of `t` in the array. Return -1 if the target element is not found;

const arr = [-5, 2, 4, 6, 10];

function binarySearch(array, target){
    leftIndex = 0;
    rightIndex = array.length - 1; //[0,1,2,3,4] - 5 elements and the last has an index of 5-1

    while(leftIndex <= rightIndex){
        middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(target === array[middleIndex]) return middleIndex; 
        else if(target < array[middleIndex]) rightIndex = middleIndex - 1;
         else leftIndex = middleIndex + 1;
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 4)); //2
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

//Big-O(logn)