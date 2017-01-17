function solve(args) {
    var value = +args[0];

    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

console.log(solve(['3']));




