function solve(args) {
    var digitToCheck = +args[0];

    if(!(digitToCheck % 2)){
        return "even " + digitToCheck;
    }else{
        return "odd " + digitToCheck;
    } 
}

console.log(solve(['1']));