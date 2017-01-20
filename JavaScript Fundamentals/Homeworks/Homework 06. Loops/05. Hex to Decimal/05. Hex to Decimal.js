function solve(args){
    var input = args[0];
    var length = input.length;
    var resylt = 0;

    for(var i = 0; i < input.length; i += 1){
        if(input[length - i - 1].charCodeAt() >= 65 &&  input[length - i - 1].charCodeAt() <= 70){

            var toDigit = input[length - i - 1].charCodeAt() - 55;

            resylt +=  toDigit * Math.pow(16, i);
        }else if(Number(input[length - i - 1]) >= 0 && Number(input[length - i - 1]) <= 9 ){

            resylt += Number(input[length - i - 1]) * Math.pow(16, i);
        }
    }
    console.log(resylt);
}

solve(['1AE3']);

// A - 65
// F - 70