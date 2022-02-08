// Imports
import data from '../data.json';

// Function that determines an annual salary based on the starting salary + tenure
export function calculateSalary(
	startingSalary: number,
	annualRaises: number[],
	selectedTenure: string
): number {
	// Initialize
	let annualSalary = startingSalary;
	let loopCount = data.tenures.indexOf(selectedTenure);
	let raisePercentage = 0;

	// Loop as many times as needed and apply raise each time
	for (let i = 0; i < loopCount; i++) {
		raisePercentage = annualRaises[i];
		annualSalary = roundToNearestHundred(annualSalary * (1 + raisePercentage));
	}

	// Return result
	return annualSalary;
}

// Rounds a number to the nearest hundred
export function roundToNearestHundred(number: number) {
	return Math.round(number / 100) * 100;
}
