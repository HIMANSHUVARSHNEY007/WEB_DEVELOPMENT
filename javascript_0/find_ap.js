let a=0, n=16, d=3;
function ap(p,q,r)
{
    let result;
    result = p + (q-1)*r;
    return result;
}
let ans=ap(a,n,d);
console.log(ans);