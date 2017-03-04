function solve(args) {
    var input = +args[0],
        arr = [...Array(input + 1).keys()],
        end = Math.sqrt(input);

    arr[1] = 0;
    for (var i = 2; i <= end; i += 1) {
        for (var j = i * i; j <= input; j += i) {
            arr[j] = 0;
        }
    }
    var result = arr.filter(Number);

    console.log(result[result.length - 1]);
}

console.log(solve(['13']));