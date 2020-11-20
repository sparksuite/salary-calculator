// Imports
import data from '../data.json';
import { calculateSalary, roundToNearestHundred } from '../utils/salary';

it('Calculates correct salary for new employee', () => {
	expect(calculateSalary(100000, [0.03, 0.02, 0.01], data.tenures[0])).toBe(
		100000
	);
});

it('Calculates correct salary after one year', () => {
	expect(calculateSalary(100000, [0.03, 0.02, 0.01], data.tenures[1])).toBe(
		103000
	);
});

it('Calculates correct salary after two years', () => {
	expect(calculateSalary(100000, [0.03, 0.02, 0.01], data.tenures[2])).toBe(
		105100
	);
});

it('Calculates correct salary after three years', () => {
	expect(calculateSalary(100000, [0.03, 0.02, 0.01], data.tenures[3])).toBe(
		106200
	);
});

it('Rounds number to nearest hundred (up)', () => {
	expect(roundToNearestHundred(1050)).toBe(1100);
});

it('Rounds number to nearest hundred (down)', () => {
	expect(roundToNearestHundred(1049)).toBe(1000);
});

it('Rounds number to nearest hundred (even)', () => {
	expect(roundToNearestHundred(1000)).toBe(1000);
});
