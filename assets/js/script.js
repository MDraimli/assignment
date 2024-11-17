
/// Task 2
function calculateSumAndAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;

    return { sum: sum, average: average };
}

// Example:
console.log("%c Task 2", "color: green; background-color: lightblue; font-weight: bold; font-size: 20px;");
const numbers = [10, 20, 30, 40];
const result = calculateSumAndAverage(numbers);
console.log("Sum:", result.sum + ", Average:", result.average);



/// task 3

function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    // when use from method it will return array without duplicates
    return Array.from(uniqueSet);
}

// Example usage:
console.log("%c Task 3", "color: green; background-color: lightblue; font-weight: bold; font-size: 20px;");
const strings = ["mohammed", "ahmad", "mohammed", "khaled", "ibrahim", "ahmad"];
const uniqueStrings = removeDuplicates(strings);
console.log(uniqueStrings);
