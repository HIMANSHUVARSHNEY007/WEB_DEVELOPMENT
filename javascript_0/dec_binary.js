let n=26, i, p=1, r=0;
while(n!=0)
{
    i=n%2;
    n=(n-i)/2;
    r=r+i*p;
    p=p*10;
}
console.log(r);