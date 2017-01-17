
function solve(args){
    var input = args.map(Number);
 
    var greater = input[0];

    for(var i = 1; i < input.length; i++){
        if(greater < input[i]){
            greater = input[i];
        }
    }

    return greater;
     
    //  Second variant
    // return Math.max(...input);
}

console.log(solve(['5', '2', '2']));