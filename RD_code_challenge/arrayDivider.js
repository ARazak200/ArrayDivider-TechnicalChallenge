//Aadam Razak RD_code_challenge/

function divideArrayIntoNParts(arr, N) {
    // Check if the input parameters are valid: arr must be an array, N must be a positive integer.
    if (!Array.isArray(arr) || !Number.isInteger(N) || N <= 0) {
        throw new Error('Invalid input: The first parameter must be an array and the second parameter must be a positive integer.');
    }
    // Initialize an empty array to store the divided arrays.
    const result = [];
    // Calculate the remainder when dividing the array length by N.
    const remainder = arr.length % N;
    // Calculate the size of each equally sized part.
    const size = Math.floor(arr.length / N);

    // Initialize the starting index for slicing the array.
    let start = 0;

    // Loop N times to divide the array into N parts.
    for (let i = 0; i < N; i++) {
        // Calculate the ending index for slicing the array.
        // Add 1 to the size if there's a remainder and we haven't distributed all the remainder yet.
        let end = start + size + (i < remainder ? 1 : 0);

        // Slice the original array from the 'start' index to the 'end' index and push it to the result array.
        result.push(arr.slice(start, end));

        // Update the 'start' index for the next iteration to begin where the current part ends.
        start = end;
    }

    // Return the array containing N equally sized parts.
    return result;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const inputArray = ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
// commented line above would crash the code because the inputArray is not an array.
const N = 3;
//const N = -3;
// commented line above would crash the code because the inputArray is not a positive integer.
console.log(divideArrayIntoNParts(inputArray, N));
// Output: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

const anotherArray = [10, 20, 30, 40, 50, 60];
const anotherN = 2;
console.log(divideArrayIntoNParts(anotherArray, anotherN));
  // Output: [ [ 10, 20, 30, 40 ], [ 50, 60 ] ]


