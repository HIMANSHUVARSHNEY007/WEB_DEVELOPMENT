function confirmEnding(str, target) {
    let arr = str[str.length-1];
    let tar = arr.slice(-target.length);
    if(target == tar)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  
  console.log(confirmEnding("Bastian", "n"));