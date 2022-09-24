function fac(n) {
   

    let mult = 1;
    for(let i=n; i>0; i--){
        mult *= i;
        //console.log(i);
    }
    return mult;
}

console.log(fac(0)); //1
console.log(fac(1)); //1
console.log(fac(4)); //24 
console.log(fac(5)); //120

