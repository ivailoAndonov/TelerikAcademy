function solve(args) {
    var firstStr = args[0],
        secondStr = args[1];

    if (firstStr === secondStr) {
        console.log("=");
    }
    if (firstStr > secondStr) {
        console.log(">");
    }
    if (firstStr < secondStr) {
        console.log("<");
    }
}

solve(['hello', 'halo']);