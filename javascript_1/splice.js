let arr = [1,2,3,4,5,6,7,8];
let rel = arr.splice(2,4);
console.log(rel);
console.log(arr);
arr = [1,2,3,4,5,6,7,8];
rel = arr.splice(2,4,9,10,11);
console.log(rel);
console.log(arr);
arr = [1,2,3,4,5,6,7,8];
rel = arr.splice(2,0,9,10);
console.log(rel);
console.log(arr);