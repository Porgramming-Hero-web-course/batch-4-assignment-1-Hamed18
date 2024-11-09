function removeDuplicates(numbers: number[]): number[] {
    const uniqueNum: number[] = [];  
    for (const num of numbers) {
        if (!uniqueNum.includes(num)) {
            uniqueNum.push(num);
        }
    }
    return uniqueNum;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
