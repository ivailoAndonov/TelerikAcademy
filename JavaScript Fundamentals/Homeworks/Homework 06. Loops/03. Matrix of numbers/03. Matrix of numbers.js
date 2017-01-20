function solve(args) {
    var input = +args[0];

    for (var i = 0; i < args; i += 1) {

        var temp = [];
        for (var j = 1; j <= args; j += 1) {

            temp.push(j + i);
        }
        console.log(temp.join(' '));
    }
}

solve(['5']);