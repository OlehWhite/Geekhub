// 2. HOF - High order functions

// Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)
// func(['my', 'name', 'is', 'Vasya'], cb); // 'MyNameIsVasya'
const validMethodName = (arrayWords, callbackToUpperCaseFirstLetter) => {
    return arrayWords.map(string => callbackToUpperCaseFirstLetter(string)).join('')
}

const validCallbackName = firstLetterOfTheWord => {
    return firstLetterOfTheWord[0].toUpperCase() + firstLetterOfTheWord.slice(1);
}
console.log(validMethodName(['my', 'name', 'is', 'Vasya'], validCallbackName));

// Першим аргументом може бути тільки масив будь-яких чисел
// func([10, 20, 30], cb) // '100, 200, 300'
const validMethodNumber = (arrayNumbers, callbackMultiply) => {
    return arrayNumbers.map(number => callbackMultiply(number)).join()
}

const validCallNumber = multiplyByTwo => {
    return multiplyByTwo * 10
}
console.log(validMethodNumber([10, 20, 30], validCallNumber));

// Першим аргументом тільки об'єкти такого формату
// func([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], cb); // 'Jhon is 45, Aaron is 20'
const validMethodObject = (arrayObj, callbackNameAndAge) => {
    return arrayObj.map((element) => callbackNameAndAge(element)).join()
}

const validCallbackObject = item => {
    return `${item.name} is ${item.age}`
}
console.log(validMethodObject([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], validCallbackObject))

// Першим аргументом може бути  тільки масив рядків
// func(['abc', '123'], cb) → // 'cba, 321' // рядки розвертаються
const validMethodReturnElement = (arrayElements, callbackReverseElement) => {
    return arrayElements.map(element => callbackReverseElement(element)).join()
}

const validCallbackReverseElement = str => {
    return str.split('').reverse().join('')
}
console.log(validMethodReturnElement(['abc', '123'], validCallbackReverseElement))

// 3.1. Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури
const rectangle = {
    width: 30,
    height: 15,
    getSquare() {
        return 0.5 * this.width * this.height
    }
};

rectangle.getSquare()

// 3.2. Створити об'єкт у якого буде ціна товара і два метода: для отримання ціни і для отримання ціни з урахуванням знижки
const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price
    },
    getPriceWithDiscount() {
        return this.price - parseInt(this.discount) / 10
    }
}

price.getPrice();
price.getPriceWithDiscount();

// 3.3. Створити об'єкт 'чисельник' у якого є числове значення і методи 'подвоїти', 'додати один', 'відняти один'.
// Методи можна викликати через крапку щоб був ланцюг виклику
const numerator = {
    value: 1,
    double() {
        this.value = this.value + this.value;
        return this
    },
    plusOne() {
        this.value = this.value + 1;
        return this
    },
    minusOne() {
        this.value = this.value - 1;
        return this
    }
}

numerator.double().plusOne().plusOne().minusOne()
numerator.value;    // 3

// 3.4. Змінити функції getElementHeight таким способом, щоб можна було викликати getElementHeight і отримати 25
const element = {
    height: 25,
    getHeight() {
        return this.height
    }
};

const getElementHeight = () => element.getHeight();
getElementHeight();   //25

// 4. Стрілочні функції
// Переробити функцію на стрілочну
const convertToObject = num => {
    const object = {
        value: num,
        isOdd: Boolean(num % 2)
    };
    return object
}
convertToObject(10);    // { value: 10, isOdd: false }

// 5. Замикання
// 5.1
// Створити функцію яка зможе так робити:
const minus = (firstNumber = 0) => {
    return (secondNumber = 0) => firstNumber - secondNumber
}
minus(10)(6); // 4

// 5.2
// Створити функція яка множить і вміє запам'ятовувати результат між викликами
const multiplyMarker = (firstNumber) => {
    let hasCalled = false;
    let isFirstOperation;

    return function (arg) {
        if (hasCalled) return isFirstOperation *= arg;

        hasCalled = true;
        isFirstOperation = firstNumber(arg)
        return isFirstOperation
    }
}

const multiply = multiplyMarker(num => num * 2)
multiply(2);   // 4
multiply(3);   // 12

// 5.3.
//     Створити модуль який може працювати з рядком і має методи
const isModule = (function () {
    let privateResult = '';

    function showStr(val) {
        privateResult += val;
    }

    return {
        setLine: function (line = '') {
            showStr(line)
        },
        showLine: function () {
            return privateResult
        },
        getLength: function () {
            return privateResult.length
        },
        reverse: function () {
            return privateResult.split('').reverse().join('')
        }
    }

})();

isModule.setLine('Oleh');     // Додаємо
isModule.showLine();   // Oleh
isModule.getLength();  // 4
isModule.reverse();    // helO

// 5.4
// Створити модуль калькулятор, який може додавати, віднімати, множити, ділити, і приводити до ступеню(степени).
// (Значення повинне зберігатись в змінній не в this)
const isModuleCalc = (function () {
    let totalResultCalc = 0;
    let hasCalled = false;

    function firstValue(value) {
        totalResultCalc += value;
    }

    return {
        setFirstNumber: function (firstNum) {
            if (hasCalled) totalResultCalc = 0;

            firstValue(firstNum)

            hasCalled = true
            return isModuleCalc
        },
        isPlusOperation: function (number) {
            totalResultCalc += number
            return isModuleCalc
        },
        isMultipleOperation: function (number) {
            totalResultCalc *= number
            return isModuleCalc
        },
        getTotalResultCalc: function () {
            console.log(totalResultCalc);
        },
        toExtent: function (number) {
            totalResultCalc = Math.pow(totalResultCalc, number)
            return isModuleCalc
        }
    }
})();

isModuleCalc.setFirstNumber(10);    // значення = 10
isModuleCalc.isPlusOperation(5);    // значення += 5
isModuleCalc.isMultipleOperation(2);    // значення *= 2
isModuleCalc.getTotalResultCalc()   // вивести в консоль 30

isModuleCalc.setFirstNumber(10).toExtent(2).getTotalResultCalc()    // 100

// 6.
// Реалізувати функцію sum.
const sum = (firstNum) => {
    return function (secondNum) {
        return function (thirdNum) {
            return firstNum + secondNum + thirdNum
        }
    }
}

sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7