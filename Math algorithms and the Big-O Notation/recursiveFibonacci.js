// Given number n, find the n-th element if the Fibonacii sequence

function recursiveFibonacci(n) {
    if(n<2) return n
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}





console.log(recursiveFibonacci(0)); //= 0
console.log(recursiveFibonacci(1)); //= 1
console.log(recursiveFibonacci(6)); //= 8

//Big-O(2^n) --> Recursiion is not a good solution to fibonacci sequence