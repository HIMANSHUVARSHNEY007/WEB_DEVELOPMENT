let tony = {
    name : 'TONY',
    lastname : 'STARK',
    friends : ['Steve','Bruce','Peter'],
    age : 45,
    isAvenger : true,
    abc : undefined,
    address:{
        state : 'New York',
        city : 'Top Island'
    },
    sayshi : function fn(){
        console.log('Iron man says HELLO')
        return 'Part of journey is the END'
    }
}

//console.log(tony);

// console.log(tony.name);
// console.log(tony.lastname);
// console.log(tony.friends);
// console.log(tony.friends[0]);
// console.log(tony.age);
// console.log(tony.isAvenger);
// console.log(tony.abc);
// console.log(tony.address);
// console.log(tony.address.city);
// console.log(tony.sayshi());


// console.log(tony['name']);
// console.log(tony['lastname']);
// console.log(tony['friends']);
// console.log(tony['friends'][0]);
// console.log(tony['age']);
// console.log(tony['isAvenger']);
// console.log(tony['abc']);
// console.log(tony['address']['city']);
// console.log(tony['sayshi']());

let karr = Object.keys(tony);
console.log(karr);
// for(let key in tony)
// {
//     console.log(tony[key]);
// }
for(let i = 0; i < karr.length ;i++)
{
    let key = karr[i];
    console.log(key);
    // console.log(tony[key]);
}
