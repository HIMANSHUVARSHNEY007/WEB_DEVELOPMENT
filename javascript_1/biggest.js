let name = 'I AM A SUPER MAN.';
let strarr = name.split(' ');
console.log(strarr);
let biggest = 0;
for(let i=0; i < strarr.length ;i++)
{
    if(strarr[i].length > biggest)
    biggest = strarr[i].length;
}
console.log(biggest);