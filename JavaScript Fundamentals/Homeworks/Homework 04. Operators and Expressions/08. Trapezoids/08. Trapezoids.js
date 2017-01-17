function solve(args) {
	var sideA = +args[0],
		sideB = +args[1],
		height = +args[2];

	var area = height*((sideA + sideB) / 2);

	return area.toFixed(7);
}

console.log(solve(['5', '7', '12']));