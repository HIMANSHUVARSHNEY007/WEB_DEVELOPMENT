a=[111,1,66,7,3,1,9,5,1,13,1,18];
function ls(params) {
    let f,l,flag=0;
    for(let i=0;i<params.length;i++)
    {   if(params[i]==1 && flag==0) f=i,flag++;
        if(params[i]==1) l=i;
    }
        console.log(f," is the first index.");
        console.log(l," is the last index.");   
}
ls(a);