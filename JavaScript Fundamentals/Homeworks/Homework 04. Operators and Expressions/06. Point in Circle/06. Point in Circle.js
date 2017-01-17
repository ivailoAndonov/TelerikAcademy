function solve(args){
    var cordinateX = +args[0],
        cordinateY = +args[1],
        radius = 4,
        twoPointsDistance = Math.abs((cordinateX - 0) * (cordinateX - 0) + (cordinateY - 0) * (cordinateY - 0));
        distance = Math.sqrt(twoPointsDistance);

        if(twoPointsDistance <= radius){
            return "yes " + distance.toFixed(2);
        }
        return "no " + distance.toFixed(2); 
}

console.log(solve(['-1.5', '-1.5']));
