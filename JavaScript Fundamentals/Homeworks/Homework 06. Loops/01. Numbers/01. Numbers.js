function solve(args) {
    var input = +args[0],
        result = [];
    
    for(var i = 1; i <= input; i++) {
        result.push(i);
    }

    console.log(result.join(' ')); 
}

solve(['5']);