function solve(args) {
	var x = +args[0],
		y = +args[1];
	var xCircle = 1,
		yCircle = 1,
		radius = 1.5;
	var result;
	var circleDistance = Math.sqrt((x - xCircle)*(x - xCircle) + (y - yCircle)*(y - yCircle));
	var inCircle = circleDistance <= radius;
	var inRectangle = (-1 <= x && x <= 5) && (-1 <= y && y <= 1);

	if (inCircle) {
		result = 'inside circle' + ' ' + (inRectangle ? 'inside rectangle' : 'outside rectangle');
	} else {
		result = 'outside circle' + ' ' + (inRectangle ? 'inside rectangle' : 'outside rectangle');		
	}

	return result;
}

console.log(solve(['2.5', '2']));