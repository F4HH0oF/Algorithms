// Given an array of `n` elements and a target element `t`, dind the index of `t` in the array. Return -1 if the target element is not found;

const arr = [-5, 2, 10, 4, 6];

function find(t) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === t) return i;
    }
    return -1;
}

console.log(find(10));
console.log(find(6));
console.log(find(20));

// Big-O(n)