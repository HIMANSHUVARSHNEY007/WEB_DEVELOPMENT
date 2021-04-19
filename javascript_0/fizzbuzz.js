for(let i=1;i<=20;i++)
{
    if(i%3==0)
    {
        if(i%5==0)
        {
            console.log(i," FIZZBUZZ");
        }
        else console.log(i," FIZZ");
    }
    else if(i%5==0)console.log(i," BUZZ");
}