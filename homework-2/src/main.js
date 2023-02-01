// 1. Створити функцію multiple() яка може приймати не обмежену кількість аргументів, та перемножує їх
const multiple = (...Arg) => {
    return Arg.reduce((element, total) => element * total)
}
multiple(2, 5, 2, 3, 4)

// 2. Створити фунцію reverseString яка приймає 1 аргумент будь-якого типу, і розвертає його.
// Наприклад: ‘test’ -> `tset`, undefined -> ‘denifednu’
const reverseString = (value) => {
    value = String(value);  // Преобразував value в строку

    let strRevers = '';
    for (let i = value.length - 1; i >= 0; i--) {
        strRevers += value[i]
    }
    return strRevers
}
reverseString(null);

// 3. Створити фунцію вгадати число. Умови:
//      a. Приймає число від 1-10. Перевірити що число не більше 10 і не менше 1, якщо не відповідає повернути помилку new Error(‘Please provide number in range 0 - 10’)
//      b. Якщо передали не число. Помилка return new Error(“Please provide a valid number”);
//      c. Далі функція генерує рандомне число від 1 до 10 і якщо задане число правильне повертає стрінгу ‘You Win!’, якщо не правильно ‘You are lose, your number is 8, the random number is 5’
const guessTheNumber = (isUserNumber) => {
    let showGameResult;
    const isRandomNumber = Math.floor(Math.random() * 10 + 1);    //  Створюємо рандомне число від 1 до 10

    if (isNaN(isUserNumber)) {
        return new Error('Please provide a valid number:');      // Якщо користувач ввів не число
    }

    if (isUserNumber <= 1 || isUserNumber > 10) {
        return new Error('Please provide number in range 1 - 10');       // Якщо число більше 10 або менше 1
    }

    if (isRandomNumber === isUserNumber) {
        showGameResult = 'You Win!'
    } else {
        showGameResult = `You are lose, your number is ${isUserNumber}, the random number is ${isRandomNumber}`
    }

    return showGameResult
}
guessTheNumber(5);

// 4. Є масив чисел (додатних, відʼємних, і впереміш). Потрібно знайти min, max, sum. Не можна використовувати методи масивів або обʼєкту Math, а тільки цикли for і while. Приклади масивів:
const getMinMaxSumNumber = (minMaxSum) => {
    const newArrayMinimum = [...minMaxSum];
    const newArrayMaximum = [...minMaxSum];

    let sumNumbers = 0;
    let maxNumber;
    let minNumber;

    for (let i = 0; i < minMaxSum.length; i++) {
        if (isNaN(minMaxSum[i])) continue    //  Пропускає, якщо не число
        sumNumbers += minMaxSum[i]   // Знаходить сумму чисел

        if (newArrayMaximum[i] >= newArrayMaximum[0]) maxNumber = newArrayMaximum[0] = newArrayMaximum[i]    // Знаходить максимальне число
        if (newArrayMinimum[i] <= newArrayMinimum[0]) minNumber = newArrayMinimum[0] = newArrayMinimum[i]    // Знаходить мінімальне число
    }

    return `Min: ${minNumber},
Max: ${maxNumber},
Sum: ${sumNumbers},`
}

getMinMaxSumNumber([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]);
getMinMaxSumNumber([-1,-8,-2]);
getMinMaxSumNumber([1,7, 22,3]);
getMinMaxSumNumber([1,undefined,3,5,-3]);
getMinMaxSumNumber([1,NaN,3,5,-3]);

// // 5. Приклади:
const getSumRain = (isArray) => {
    const input = [...isArray]
    const maxLeftArray = [...isArray];
    const maxRightArray = [...isArray];

    //  Створюю  пусті масиви для комфортної роботи в подальшому
    let sumFirstArray = [],
        maxLeft = [],
        sumSecondArray = [],
        maxRight = [],
        minLR = [],
        isValueRain = []

    maxLeftArray.map((element) => {      // сортуємо масив із ліва направо (maxLeft)
        sumFirstArray.push(element)
        maxLeft.push(Math.max(...sumFirstArray))
        return maxLeft
    })
    maxLeft.pop()   // Вирівнюємо лівий край скали першого масива
    maxLeft.unshift(0)  // Вирівнюємо правий край скали першого масива

    maxRightArray.reverse().map((element) => {      // Створюємо такий самий масив тільки з права наліво (maxRight) за допомогою reverse()
        sumSecondArray.push(element)
        maxRight.push(Math.max(...sumSecondArray))
        return maxRight
    })
    maxRight.unshift(0)     // Вирівнюємо лівий край скали другого масива
    maxRight.reverse()      // Розвертаємо, щоб коретно пройшли наступні операціїї

    for (let i = 0; i < maxLeft.length || i < maxRight.length; i++) {       // Рахуємо мінімум в який може набратися вода
        minLR.push(Math.min(maxLeft[i], maxRight[i]));
    }

    for (let i = 0; i < input.length; i++) {        //  Знаходимо заповнені водою клітинки
        if (minLR[i] >= input[i]) {
            const resultValueRain = minLR[i] - input[i]
            isValueRain.push(resultValueRain)
        }
    }

    return isValueRain.reduce((accumulator, total) => accumulator + total, 0);     //  Рахуємо клітинки з водою
}

getSumRain( [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]);