function removeDuplicates(numbers: number[]): number[] {
    let uniqueNumbers: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (uniqueNumbers.indexOf(numbers[i]) === -1) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    return uniqueNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));