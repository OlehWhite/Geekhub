// №1
// const input = document.querySelector('.input');
// const p = document.querySelector('.p-default')
//
// input.addEventListener('keydown', () => {
//     p.className = 'p-text';
//     p.innerHTML = input.value;
//     if (input.value.length === 0) p.className = 'p-default'
//     setTimeout(() => p.className = 'p-default', 1000);
// })

// №2
// 1. isPrime - Returns true or false, indicating whether the given number is prime.
const isPrime = (number) => {
    if (number < 2) return false
    if (number === 2) return true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}

isPrime(17)

// 2. factorial - Returns a number that is the factorial of the given number.
const factorial = (number) => {
    let total = 1;
    for (let i = number; i >= 1; i--) {
        total *= i
    }
    return total
}
factorial(6)

// 4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
const isSorted = (numbers) => {
    let res;
    if (numbers.length === 0) res = true
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] < numbers[i + 1]) res = true
        if (numbers[i] > numbers[i + 1]) {
            res = false
            break
        }
    }
    return res
}
isSorted([-Infinity, -5, 0, 3, 9])  // true

// 5. reverse - Reverses the given string (yes, using the built in reverse function is cheating).
const reverse = (str) => {
    str = String(str);

    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
reverse('abcdef')

// 6.indexOf - Implement the indexOf function for arrays.
const indexOf = (arrayNum, findNum) => {
    let findIndexNum;
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] === findNum) {
            findIndexNum = i
            break
        }
        findIndexNum = -1
    }
    return findIndexNum
}
indexOf([1, 2, 3], 1)

// 7. isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
// isPalindrome('')                                // true
// isPalindrome('abcdcba')                         // true
// isPalindrome('abcd')                            // false
// isPalindrome('A man a plan a canal Panama')     // true