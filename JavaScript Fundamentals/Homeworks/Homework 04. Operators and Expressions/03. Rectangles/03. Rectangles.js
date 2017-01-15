function solve(args){
    var width = +args[0],
        height = +args[1],
        area = width * height,
        perimeter = (width + height) * 2;

        return area.toFixed(2) + " " + perimeter.toFixed(2);
}

console.log(solve(['2.5', '3']));