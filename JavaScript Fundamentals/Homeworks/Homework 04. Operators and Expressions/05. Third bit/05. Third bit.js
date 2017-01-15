function solve(args){
    var input = +args[0];
        decimal = input.toString(2);

        return (decimal[decimal.length - 4]) ? decimal[decimal.length - 4] : "0";
}

console.log(solve(['12344']));