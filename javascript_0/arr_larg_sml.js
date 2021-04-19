a=[111,66,7,3,9,5,13,18];
function ls(params) {
    let l=params[0], s=params[0];
    for(let i=0;i<params.length;i++)
    {   if(params[i]>l) l=params[i];
        if(params[i]<s) s=params[i];
    }
        console.log(l," is the largest.");
        console.log(s," is the smallest.");   
}
ls(a);