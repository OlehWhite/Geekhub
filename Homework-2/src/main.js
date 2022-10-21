// // 1. Створити функцію multiple() яка може приймати не обмежену кількість аргументів, та перемножує їх
// const multiple = (...Arg) => {
//     return [...Arg].reduce((element, total) => element * total, 1)
// }
//
// console.log(multiple(1, 2, 3, 5))
// console.log(multiple(6, 7, 8, 9))

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
// //      a. Приймає число від 1-10. Перевірити що число не більше 10 і не менше 1, якщо не відповідає повернути помилку new Error(‘Please provide number in range 0 - 10’)
// //      b. Якщо передали не число. Помилка return new Error(“Please provide a valid number”);
// //      c. Далі функція генерує рандомне число від 1 до 10 і якщо задане число правильне повертає стрінгу ‘You Win!’, якщо не правильно ‘You are lose, your number is 8, the random number is 5’
// const isUserNumber = Number(prompt('Let\'s play the guess a number game!\n' +
//     'Give one whole number from 0 to 10!', 5));
//
// const guessTheNumber = (isUserNumber) => {
//
//     const isRandomNumber = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//
//     if (isNaN(isUserNumber)) {
//         return new Error('Please provide a valid number:');
//     }
//
//     if (isUserNumber < 0 || isUserNumber > 10) {
//         return new Error('Please provide number in range 0 - 10');
//     }
//
//     if (isRandomNumber === isUserNumber) {
//         alert('You Win!')
//     } else {
//         alert(`You are lose, your number is ${isUserNumber}, the random number is ${isRandomNumber}`);
//     }
// }
//
// const result = guessTheNumber(isUserNumber);
// console.log(result);

// // 4. Є масив чисел (додатних, відʼємних, і впереміш). Потрібно знайти min, max, sum. Не можна використовувати методи масивів або обʼєкту Math, а тільки цикли for і while. Приклади масивів:
// const getMinMaxSumNumber = (minMaxSum) => {
//     const newArrayMinimum = [...minMaxSum];
//     const newArrayMaximum = [...minMaxSum];
//
//     let sumNumbers = 0;
//     let maxNumber;
//     let minNumber;
//
//     for (let i = 0; i < minMaxSum.length; i++) {
//         if (minMaxSum[i] === undefined || isNaN(minMaxSum[i])) continue     // Знаходить сумму чисел
//         sumNumbers += minMaxSum[i]
//
//         if (newArrayMaximum[i] >= newArrayMaximum[0]) maxNumber = newArrayMaximum[0] = newArrayMaximum[i]      // Знаходить максимальне число
//         if (newArrayMinimum[i] <= newArrayMinimum[0]) minNumber = newArrayMinimum[0] = newArrayMinimum[i]      // Знаходить мінімальне число
//     }
//
//     return `Min: ${minNumber},
// Max: ${maxNumber},
// Sum: ${sumNumbers},`
// }
//
// const result = getMinMaxSumNumber([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]);
// const resultTwo = getMinMaxSumNumber([-1,-8,-2]);
// const resultThree = getMinMaxSumNumber([1,7,3]);
// const resultFour = getMinMaxSumNumber([1,undefined,3,5,-3]);
// const resultFive = getMinMaxSumNumber([1,NaN,3,5,-3]);
// console.log(result)
// console.log(resultTwo)
// console.log(resultThree)
// console.log(resultFour)
// console.log(resultFive)

// 5. Приклади:
// // [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// // [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// // [7, 0, 1, 3, 4, 1, 2, 1] // 9
// // [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// // [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// // [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// // [2, 2, 2, 2, 2] // 0

