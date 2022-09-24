//Objects - Big-O
// An object is a collection of key value pairs
const person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}
/*
Insert = O(1) - const.
Remove = O(1)
Access = O(1)
Search - O(n)
Object.keys() - O(n) - linear
Object.values() - O(n)
Object.entries() - O(n)
*/ 

//Array - Big-O
// An array is an ordered collection of values
const odd = [1, 3, 5, 7, 9]
/*
Insert / Remove at END = O(1) - const.
Insert / Remove at BEGINNING = O(n) - linear
Access = O(1)
Search - O(n)
Push / pop - O(1)
Shift / unshift / concat / splice / slice - O(n)
forEach / map / filter / reduce - O(n)
*/ 
