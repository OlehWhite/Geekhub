// №2
// 1. isPrime
const isPrime = (number) => {
    if (number < 2) return false
    if (number === 2) return true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false
    }
    return true
}
isPrime(17)

// 2. factorial
const factorial = (number) => {
    let total = 1;
    for (let i = number; i >= 1; i--) {
        total *= i
    }
    return total
}
factorial(6);

// 3. fib - Returns the nth Fibonacci number.
const fib = (number) => {
    const total = [0, 1];
    for (let i = 2; i <= number; i++) {
        const first = total[i - 1];
        const second = total[i - 2];
        total.push(first + second);
    }
    return total[number];
}
fib(20);

// 4. isSorted
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

// 5. reverse
const reverse = (str) => {
    str = String(str);
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}
reverse('abcdef')

// 6.indexOf
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

// 7. isPalindrome
const isPalindrome = (string) => {
    return string.replace(/ /g,'').
    split('').
    reverse().
    join('').
    toLowerCase() === string.replace(/ /g,'').toLowerCase()
}
isPalindrome('A man a plan a canal Panama')

// 8. missing
const missing = (array) => {
    let sumTotal = 0;
    let sum = 0;
    array.sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        sumTotal = array[i] * (array[i] + 1) / 2
        sum += array[i]
    }
    return sumTotal - sum === 0 ? undefined : sumTotal - sum
}
missing([5, 1, 4, 2]);

// 9. isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
const isBalanced = (str) => {
    str = str.replace(/[a-zа-яё\s0-9.,*+?^$()|[\]/\\]/gi, '')
    let res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(str[i])
    }
    if (res.length > 0) {
        for (let i = 0; i < res.length + 1; i++) {
            if (res[0] === '{' && res[res.length - 1] === '}') {
                res.shift()
                res.pop()
            }
        }
    }
    return res.length === 0
}
isBalanced('foosdfgsdfg { basa)(dfasdf,..,r { basdfsasm/df.msam/.as,mdf23(41az } 12341234...., }')      // true

// №3 Matrix
const spiralMatrixIII = (R, C, r0, c0) => {
    let steps = 1;
    const result = [];
    const validate = (row, col) => {
        if (row < 0 || col < 0 || row >= R || col >= C) return
        result.push([row, col])
    }
    while (result.length < R * C) {
        for (let i = 0; i < steps; i++) validate(r0, c0++)
        for (let i = 0; i < steps; i++) validate(r0++, c0)
        steps++
        for (let i = 0; i < steps; i++) validate(r0, c0--)
        for (let i = 0; i < steps; i++) validate(r0--, c0)
        steps++
    }
    return result
}
spiralMatrixIII(R = 5, C = 6, r0 = 1, c0 = 4)
