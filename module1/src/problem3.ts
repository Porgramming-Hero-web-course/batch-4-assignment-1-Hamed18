function countWordOccurrences(sentence: string, word: string): number {
    const a = sentence.toLowerCase();
    const b = word.toLowerCase();
    const words = a.split(" ");

    let count = 0;
    for (const w of words) {
        if (w === b) {
            count++;
        }
    }
    return count;
}

console.log(countWordOccurrences("I love typescript", "typescript")); 
