// // 1. Створити функцію multiple() яка може приймати не обмежену кількість аргументів, та перемножує їх
// const multiple = (...Arg) => {
//     let total = 0;
//     for (let i = 0; i < Arg.length; i++) {
//         total += Arg[i]
//     }
//     return total
// }
// console.log(multiple(1, 2, 3, 4, 5))


// // 2. Створити фунцію reverseString яка приймає 1 аргумент будь-якого типу, і розвертає його.
// // Наприклад: ‘test’ -> `tset`, undefined -> ‘denifednu’
// const reverseString = (value) => {
//     value = String(value);  // Преобразував value в строку
//
//     let strRevers = '';
//     for (let i = value.length - 1; i >= 0; i--) {
//         strRevers += value[i]
//     }
//     return strRevers
// }
//
// const res = reverseString(undefined)
// console.log(res);

// // 3. Створити фунцію вгадати число. Умови:
// //      a. Приймає число від 1-10. Перевірити що число не більше 10 і не менше 0, якщо не відповідає повернути помилку new Error(‘Please provide number in range 0 - 10’)
// //      b. Якщо передали не число. Помилка return new Error(“Please provide a valid number”);
// //      c. Далі функція генерує рандомне число від 1 до 10 і якщо задане число правильне повертає стрінгу ‘You Win!’, якщо не правильно ‘You are lose, your number is 8, the random number is 5’
// const isUserNumber = 3
//     // Number(prompt('Let\'s play the guess a number game!\n' +
//     // 'Give one whole number from 0 to 10!', 0));
//
// const guessTheNumber = (isUserNumber) => {
//
//     const isRandomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//
//     if ( typeof isUserNumber !== 'number') {
//         return new Error('Please provide a valid number:');
//     }
//
//     if (isUserNumber < 0 || isUserNumber > 10) {
//         throw new Error('Please provide number in range 0 - 10');
//     }
//
//     if (isRandomNumber === isUserNumber) {
//         return 'You Win!'
//     } else {
//         return `You are lose, your number is ${isUserNumber}, the random number is ${isRandomNumber}`;
//     }
// }
//
// const result = guessTheNumber(isUserNumber);
// console.log(result);

// 4. Є масив чисел (додатних, відʼємних, і впереміш). Потрібно знайти min, max, sum. Не можна використовувати методи масивів або обʼєкту Math, а тільки цикли for і while. Приклади масивів:
const getMinMaxSumNumber = (minMaxSum) => {
    let sum = 0;
    for (let i = 0; i < minMaxSum.length; i++) {
        sum += minMaxSum[i]
    }

    return `
        Sum: ${sum}
        Min: ${min}
        Max: ${max}
        `

}

const result = getMinMaxSumNumber([1,7,3]);
console.log(result)

    // [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
    // [-1,-8,-2]
    // [1,7,3]
    // [1,undefined,3,5,-3]
    // [1,NaN,3,5,-3]