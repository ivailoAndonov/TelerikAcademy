function solve(args){
    var input = +args[0],
        digitToCheck =  parseInt((input / 100) % 10);

        //  Second variant
        // digitToString = input.toString(),
        // digitToCheck = parseInt(digitToString[digitToString.length - 3]);

    if (digitToCheck === 7){       
        return "true";
    }else{
        return "false " + digitToCheck;

        //  Second variant
        // return ("false " + ((isNaN(digitToCheck)) ? "0" : digitToCheck));
    }
}

console.log(solve(['7']));