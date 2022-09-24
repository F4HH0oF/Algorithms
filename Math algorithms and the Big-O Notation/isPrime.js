function isPrime(n){
    if(n<2) return false; 
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false
    }
    return true;
}

// Prime number is a natural number greater than 1 that is not a product of two smallew natural numbers.
// isPrime(5) = true (1*5)
// isPrime(4) = false (1*4, 2*2)

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false

//But what if n=10000. Then the for loop is executed 10000 times. There is more oprimal way
//Integers larger than the square root do not need to be checked because, whenever `n=a*b`, one of the two factors `a` and `b` is less than or equal to the square root of `n`
// 24 = 4*6, sqrt(24)=4.89
// 35 = 5*7, sqrt(35)=5.91