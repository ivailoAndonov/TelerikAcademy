// function mostFrequentNumber(input) {
//     let n = Number(input[0]);
//     let numbers = input.slice(1, input.length).map(Number);
//     numbers.sort();

//     let bestLength = 1;
//     let currentLength = 1;
//     let number = numbers[0];
//     for (let i = 1; i < n; i++) {
//         if (numbers[i - 1] == numbers[i]) {
//             currentLength++;
//         }
//         else {
//             currentLength = 1;
//         }

//         if (currentLength > bestLength) {
//             bestLength = currentLength;
//             number = numbers[i];
//         }
//     }

//     console.log(`${number} (${bestLength} times)`);
// }

function solve(args){
    var arr = args.slice(1).map(Number),
    len = arr.length,
    current = 0,
    count = 0,
    digit = 0;
    
    for(var i = 0; len > i; i += 1){
        for(var j = 0; len > j; j += 1){
            if(arr[i] === arr[j]){
                current += 1;
            }
        }
        if(count < current){
            count = current;
            current = 0;
            digit = arr[i];
        }
        else{
            current = 0;
        }
    }
    return digit + ' (' + count + " times)";
}

console.log(solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']));

