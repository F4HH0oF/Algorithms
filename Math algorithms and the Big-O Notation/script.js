function summation(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
// Time complexity is n+2 { O(n) - linear }
// Lines 2 & 6 executes 1 time while the for loop executes n-times

//Time complexity is dependant on the input

function summation(n) {
    return (n * (n+1)) / 2;
}
// TC: O(1) - const.

for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        //some code
    }
}
// TC: O(n2) - Quadratic

for(i=1; i<=n; i++) {
    for(j=1; j<=i; j++) {
        for(k=1; k<=i; k++) {
            //more code
        }
    }
}
// TC: O(n3) - Cubic

// Input size reduces by half every iteration 
// TC: O(logn) - Logarithmic