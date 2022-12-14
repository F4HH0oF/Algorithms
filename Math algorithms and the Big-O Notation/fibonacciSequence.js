/*PROBLEM:
Give a number 'n', find the first 'n'n elements of the Fibonacci sequence
*In mathemathics Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
fibonacci(2) = [0,1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]
*/

let n;

function fibonaci(n){
    let fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonaci(2)) //fib[0, 1]
console.log(fibonaci(3)) //fib[0, 1, 1]
console.log(fibonaci(7)) //fib[0, 1, 1, 2, 5, 7, 8]

//Big-O(n)