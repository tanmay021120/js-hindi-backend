console.log(null>0)    // false
console.log(null==0)  // false 
console.log(null>=0) //  true because >= works differently

console.log(undefined>=0) // it gives false in all cases

// === does strict check 

//  Symbol('123')!= Symbol('123')

// Non - primitive or reference type and primitive 
// array = ["Rahul","Hi"]
//Obj = {name : "tanmay",age:12}
//function -> const myFunction = function(){}
// null has type object , bigInt has undefined,symbol has symbol only 