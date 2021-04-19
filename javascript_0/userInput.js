function f(params) {
    console.log(params+3);
    params=params*1;
    console.log(params+3);
}
f(process.argv[2]);