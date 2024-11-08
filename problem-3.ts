function countWordOccurrences(sentence: string, word: string): number {
    let count = 0;
    let words = "";
    let currentWord = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i].toLowerCase();

        if (char !== ' ') {
            currentWord += char;
        } else {
            if (currentWord === word.toLowerCase()) {
                count++;
            }
            currentWord = "";
        }
    }

    if (currentWord === word.toLowerCase()) {
        count++;
    }

    return count;
}

console.log(countWordOccurrences("I love typescript", "typescript"));