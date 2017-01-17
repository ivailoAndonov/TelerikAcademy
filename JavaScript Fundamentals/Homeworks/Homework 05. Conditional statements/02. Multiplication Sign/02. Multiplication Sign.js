function solve(args){
        var isMinus = false;

        for(var i = 0; i < args.length; i++){

            if(+args[i] === 0){return '0';}
            if(+args[i] < 0){isMinus = !isMinus;}
        }

        return isMinus ? '-' : '+';
}

console.log(solve(['-1', '0', '-5.1']));