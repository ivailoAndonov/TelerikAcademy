
function solve(args) {
    var j,
        i,
        minNumber,
        n = +args[0],
        numbers = args.slice(1).map(Number);

    for (i = 0; i < n; i += 1) {
        minNumber = numbers[i];
        for (j = i + 1; j < n; j += 1) {
            if (minNumber > numbers[j]) {
                minNumber = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = minNumber;
            }
        }
    }

    console.log(numbers.join('\n'));
}

// function solve(args) {
//     args.shift();
//     args.sort(function(a, b) { return a - b; });
//     console.log(args.join('\n'));
// }

solve(['6', '3', '4', '1', '5', '2', '6']);

