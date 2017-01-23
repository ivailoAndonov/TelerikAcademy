function solve(args) {
    var length = +args[0];
    var numbers = args.slice(1).map(Number);

    var maxSeq = 0;
    var seqNow = 1;

    for (var i = 1; i < length; i++) {
        if (numbers[i] === numbers[i - 1]) {     
            seqNow++;
            if (seqNow > maxSeq) {
                maxSeq = seqNow;
            }
        } else {
            seqNow = 1;
        }
    }

    console.log(maxSeq);
}

solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']);

solve(['1','0'])