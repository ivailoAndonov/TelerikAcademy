function solve(args) {
    var input = +args[0],
        result = [];
    
    for(var i = 1; i <= input; i++) {
        result.push(i);
    }

    return result.join(' ');
}

console.log(solve(['5']));