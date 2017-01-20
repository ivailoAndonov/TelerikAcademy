function solve(args) {
    var input = args.map(Number);
    var min = input[0],
        max = input[0],
        sum = 0,
        avg;

    for (var i = 0; i < input.length; i += 1) {
        if (input[i] < min) {
            min = input[i];
        }
        else if (input[i] > max) {
            max = input[i];
        }
        sum += input[i];
    }

    avg = sum / input.length;

    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}

solve(['2', '5', '1'])