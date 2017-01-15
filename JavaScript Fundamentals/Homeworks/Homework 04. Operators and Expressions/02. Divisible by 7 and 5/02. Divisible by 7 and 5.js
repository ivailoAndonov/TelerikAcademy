function solve(args){
    var digitToCheck = +args[0];

    if (!(digitToCheck % 5) && !(digitToCheck % 7)){
        return "true " + digitToCheck;
    }else{
        return "false " + digitToCheck;
    } 
}

console.log(solve(['0']));