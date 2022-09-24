// An integer is a power of two if there exists an integer "x" such that n === 2(pow x)

function isPowerOfTwo(n) {
    for(let i=n; n>=0; n/2){
        if(n%2==0){
            console.log(`da: ${n}`);
        }
        else if(n%2==1){
            console.log(`maybe: ${n}`);
        }
        else{
            console.log(`ne: ${n}`);
        }

    }



// 8/2=4 4/2=2 2/2=1


console.log(isPowerOfTwo(0)) //false
console.log(isPowerOfTwo(1)) //true 2 (pow 0)
console.log(isPowerOfTwo(2)) //true 2 (pow 1)
console.log(isPowerOfTwo(5)) //false 
