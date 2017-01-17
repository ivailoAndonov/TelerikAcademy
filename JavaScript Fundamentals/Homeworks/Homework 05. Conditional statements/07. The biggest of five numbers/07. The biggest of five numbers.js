function solve(args) {
	var firstNum = +args[0],
		secondNum = +args[1],
		thirdNum = +args[2],
		fourthNum = +args[3],
		fifthNum = +args[4],
		biggestNum = firstNum;

	if (secondNum >= firstNum) {
		biggestNum = secondNum;
	}
	if (thirdNum >= firstNum && thirdNum >= secondNum) {
		biggestNum = thirdNum;
	}
	if (fourthNum >= firstNum && fourthNum >= secondNum && fourthNum >= thirdNum ) {
		biggestNum = fourthNum;
	}
	if (fifthNum >= firstNum && fifthNum >= secondNum && fifthNum >= thirdNum && fifthNum >= fourthNum) {
		biggestNum = fifthNum;
	}

	return biggestNum;
}

console.log(solve(['5', '2', '2', '4', '1']));