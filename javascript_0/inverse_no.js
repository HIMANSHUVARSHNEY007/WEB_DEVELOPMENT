let n=35241;
    let inverted = 0, power = 1;
    
    while (n > 0)
    {
        let digit = n % 10;
        n = (n-digit) / 10;
        inverted += power * Math.pow(10, digit - 1);
        power++;
    }
    console.log(inverted);