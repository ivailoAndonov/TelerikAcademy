function solve(args) {
    var digitOne = +args[0],
        digitTwo = +args[1];

        if(digitOne > digitTwo){
            var temp = digitOne;
            digitOne = digitTwo;
            digitTwo = temp;

            return digitOne + " " +  digitTwo;
        }
        return digitOne + " " + digitTwo;

}

console.log(solve(['5', '2']));