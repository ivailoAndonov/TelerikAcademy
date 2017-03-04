function solve(args) {
    var len = +args[0],
        arr = args.slice(1, len + 1).map(Number),
        x = +args[len + 1],
        max = arr.length - 1,
        min = 0,
        guess;

    while (min <= max) {

        guess = Math.floor((max + min) / 2) | 0;
      
        if(arr[guess] < x){
            min = guess + 1;
        }
        else if(arr[guess] > x){
            max = guess - 1;
        }
        else {
            // return guess;
            console.log(guess);
            return
        }
    }
    return -1;
}

console.log(solve(['10', '1', '2', '4', '8', '16','31', '32', '64', '77', '99', '32']));
