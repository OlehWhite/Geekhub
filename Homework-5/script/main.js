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
// fib(0)                              // 0
// fib(1)                              // 1
// fib(10)                             // 55
// fib(20)                             // 6765
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
// isBalanced('}{')                      // false
// isBalanced('{{}')                     // false
// isBalanced('{}{}')                    // false
// isBalanced('foo { bar { baz } boo }') // true
// isBalanced('foo { bar { baz }')       // false
// isBalanced('foo { bar } }')           // false


const isBalanced = (str) => {
    str = str.replace(/[a-zа-яё\s]/gi, '')
    let brc = {
        '}': '{',
    };

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (isClosedBrc(str[i])) {
            if (brc[str[i]] !== stack.pop()) {
                return false
            }
        } else {
            stack.push(str[i]);
        }
    }
    return stack.length === 0
}

const isClosedBrc = (char) => {
    return ['}'].indexOf(char) > -1
}

// console.log(isBalanced('}{'));                      // false
// console.log(isBalanced('{{}'));                     // false
// console.log(isBalanced('{}{}'));                    // false
// console.log(isBalanced('foo { bar { baz } boo }')); // true
// console.log(isBalanced('foo { bar { baz }'));       // false
// console.log(isBalanced('foo { bar } }'));           // false

// №3 Matrix