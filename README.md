# Array Divider | Technical Challenge
### Author [Aadam Razak](https://github.com/ARazak200)
Date: 20/07/2023

<a href="https://www.javascript.com" target="_blank"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript logo" width="40" height="40"></a> 

<u> Problem Summary</u>

Given an array of numbers and a positive integer N, the task is to divide the array into N equally sized sub-arrays. If the size of the original array cannot be divided evenly by N, the final sub-array should have a length equal to the remainder.

<u>Solution Approach</u>

To solve this problem, I can implement a function in JavaScript that takes the input array and the positive integer N as parameters. The function will create an array to store the divided sub-arrays and calculate the size of each sub-array. Then, it will use a loop to iterate N times and slice the original array into N parts, pushing each part into the result array. To handle the case where the division is not even, we'll check if there's a remainder and distribute the remainder elements among the sub-arrays accordingly. Finally, the function will return the array containing N equally sized sub-arrays.

The solution makes use of core JavaScript functions and logic, ensuring that no external libraries are needed to achieve the desired behavior. It can be used in production environments and is designed to be readable and maintainable, making it suitable for use by others who may not be familiar with the original requirement.

## To Execute the code do the following:-

1. Please use Visual Studio Code.
2. The preferred javascript runtime is node.
3. You made a copy into your machine by using the git Clone function.
```bash
git clone https://github.com/ARazak200/ArrayDivider-TechnicalChallenge.git
````
4. Open the terminal with the working directory as RD_code_challenge.
5. Run the javascript file by using the cmd "node" alongside the file name.
```bash
node arrayDivider.js
```

