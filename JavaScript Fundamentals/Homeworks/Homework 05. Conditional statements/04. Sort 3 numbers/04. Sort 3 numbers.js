function solve(args) {
	var firstNum = +args[0],
	 	secondNum = +args[1],
	 	thirdNum = +args[2];
	 	
 	if (firstNum >= secondNum && firstNum >= thirdNum) {
 		if (secondNum >= thirdNum) {
 			return firstNum + ' ' + secondNum + ' ' + thirdNum; 
 		} else {
 			return firstNum + ' ' + thirdNum + ' ' + secondNum;
 		}
 	} else if (secondNum >= firstNum && secondNum >= thirdNum) {
 		if (firstNum >= thirdNum) {
 			return secondNum + ' ' + firstNum + ' ' + thirdNum;
 		} else {
 			return secondNum + ' ' + thirdNum + ' ' + firstNum;

 		}
 	} else if (thirdNum >= firstNum && thirdNum >= secondNum) {
 		if (firstNum >= secondNum) {
 			return thirdNum + ' ' + firstNum + ' ' + secondNum;
 		} else {
 			return thirdNum + ' ' + secondNum + ' ' + firstNum;
 		}
 	}
}

console.log(solve(['5', '1', '2']));