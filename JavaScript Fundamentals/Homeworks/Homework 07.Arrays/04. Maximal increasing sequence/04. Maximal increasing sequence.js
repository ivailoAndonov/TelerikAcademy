// function solve(args){
//     var n = +args[0];
//     var inputs = args.slice(1).map(Number);
    
//     var currentSeq = 1,
//         maxSeq = 0;

//     for(var i = 1; i < inputs.length; i += 1){

//         if(inputs[i] === (inputs[i - 1] + 1)){

//             currentSeq += 1;
  
//             if(maxSeq < currentSeq){
//                 maxSeq = currentSeq;
//             }
//         }else{
//             currentSeq = 1;
//         }
//     }
//     console.log(maxSeq);
// }


function solve(args){
    var n = +args[0];
    var inputs = args.slice(1).map(Number);
    
    var currentSeq = 1,
        maxSeq = 0;

    for(var i = 1; i < inputs.length; i += 1){

        if(inputs[i] > (inputs[i - 1])){

            currentSeq += 1;
  
            if(maxSeq < currentSeq){
                maxSeq = currentSeq;
            }
        }else{
            currentSeq = 1;
        }
    }
    console.log(maxSeq);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
