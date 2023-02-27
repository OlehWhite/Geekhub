// 2. HOF - High order functions

// Першим аргументом може бути масив будь-яких рядків інших значень там немає (input validation)
// func(['my', 'name', 'is', 'Vasya'], cb); // 'MyNameIsVasya'

type FirsLetter = (word: string) => void;

const validMethodName = (
  arrayWords: string[],
  callbackToUpperCaseFirstLetter: FirsLetter
): string => {
  return arrayWords.map(callbackToUpperCaseFirstLetter).join("");
};

const validCallbackName: FirsLetter = (firstLetterOfTheWord) => {
  return firstLetterOfTheWord[0].toUpperCase() + firstLetterOfTheWord.slice(1);
};
console.log(validMethodName(["my", "name", "is", "Vasya"], validCallbackName));

// Першим аргументом може бути тільки масив будь-яких чисел
// func([10, 20, 30], cb) // '100, 200, 300'

type MultiplyNumber = (number: number) => void;

const validMethodNumber = (
  arrayNumbers: number[],
  callbackMultiply: MultiplyNumber
): string => {
  return arrayNumbers.map(callbackMultiply).join();
};

const validCallNumber: MultiplyNumber = (multiplyByTwo) => {
  return multiplyByTwo * 10;
};
console.log(validMethodNumber([10, 20, 30], validCallNumber));

// Першим аргументом тільки об'єкти такого формату
// func([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], cb); // 'Jhon is 45, Aaron is 20'

type NameAndAge = (object: object) => void;

const validMethodObject = (
  arrayObj: Array<{ age: number; name: string }>,
  callbackNameAndAge: NameAndAge
): string => {
  return arrayObj.map(callbackNameAndAge).join();
};

const validCallbackObject = (item) => {
  return `${item.name} is ${item.age}`;
};
console.log(
  validMethodObject(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" },
    ],
    validCallbackObject
  )
);

// Першим аргументом може бути  тільки масив рядків
// func(['abc', '123'], cb) → // 'cba, 321' // рядки розвертаються

type ReversElement = (fn: string) => void;

const validMethodReturnElement = (
  arrayElements: string[],
  callbackReverseElement: ReversElement
) => {
  return arrayElements.map(callbackReverseElement).join();
};

const validCallbackReverseElement: ReversElement = (str) => {
  return str.split("").reverse().join("");
};
console.log(
  validMethodReturnElement(["abc", "123"], validCallbackReverseElement)
);

// 3.1. Створити об'єкт який описує ширину і висоту прямокутника, а також вираховує площу фігури
interface IRectangle {
  width: number;
  height: number;
  getSquare(): number;
}

const rectangle: IRectangle = {
  width: 4,
  height: 2,
  getSquare() {
    return this.width * this.height;
  },
};

rectangle.getSquare();

// 3.2. Створити об'єкт у якого буде ціна товара і два метода: для отримання ціни і для отримання ціни з урахуванням знижки

type TypePrice = {
  price: number;
  discount: string;
  getPrice(): number;
  getPriceWithDiscount(): number;
};

const price: TypePrice = {
  price: 10,
  discount: "15%",
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    const percent = this.price * (parseInt(this.discount) / 100);
    return this.price - percent;
  },
};
price.getPrice();
price.getPriceWithDiscount();

// 3.3. Створити об'єкт 'чисельник' у якого є числове значення і методи 'подвоїти', 'додати один', 'відняти один'.
// Методи можна викликати через крапку щоб був ланцюг виклику

type TypeNumber = {
  value: number;
  double(): TypeNumber;
  plusOne(): TypeNumber;
  minusOne(): TypeNumber;
};

const numerator: TypeNumber = {
  value: 1,
  double() {
    this.value++;
    return this;
  },
  plusOne() {
    this.value += 1;
    return this;
  },
  minusOne() {
    this.value -= 1;
    return this;
  },
};

numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3

// 3.4. Змінити функції getElementHeight таким способом, щоб можна було викликати getElementHeight і отримати 25
type TypeElement = {
  height: number;
  getHeight(): number;
};

const element: TypeElement = {
  height: 25,
  getHeight() {
    return this.height;
  },
};

const getElementHeight = () => element.getHeight();
getElementHeight(); //25

// 4. Стрілочні функції
// Переробити функцію на стрілочну

type ConvertToObject = (value: number) => {
  value: number;
  isOdd: boolean;
};

const convertToObject: ConvertToObject = (number) => ({
  value: number,
  isOdd: Boolean(number % 2),
});
convertToObject(10); // { value: 10, isOdd: false }

// 5. Замикання
// 5.1
// Створити функцію яка зможе так робити:

type Minus = (firstNumber?: number) => (secondNumber?: number) => number;

const minus: Minus = (firstNumber = 0) => {
  return (secondNumber = 0) => firstNumber - secondNumber;
};
minus(10)(6); // 4

// 5.2
// Створити функцію яка множить і вміє запам'ятовувати результат між викликами

type FirstNumber = {
  (firstNumber: number): number;
};

type MultiplyMarket = (firstNumber: FirstNumber) => (arg: number) => number;

const multiplyMarker: MultiplyMarket = (firstNumber) => {
  let hasCalled = false;
  let firstOperation: number;

  return function (arg) {
    if (hasCalled) return (firstOperation *= arg);

    hasCalled = true;
    firstOperation = firstNumber(arg);
    return firstOperation;
  };
};

const multiply = multiplyMarker((num) => num * 2);
multiply(2); // 4
multiply(3); // 12

// 5.3.
//     Створити модуль який може працювати з рядком і має методи
type TypeModule = {
  setLine: (line?: string) => void;
  showLine: () => string;
  getLength: () => number;
  reverse: () => string;
};

const module: TypeModule = (function () {
  let privateResult = "";

  function showStr(val: string) {
    privateResult += val;
  }

  return {
    setLine: function (line = "") {
      showStr(line);
    },
    showLine: function () {
      return privateResult;
    },
    getLength: function () {
      return privateResult.length;
    },
    reverse: function () {
      return privateResult.split("").reverse().join("");
    },
  };
})();

module.setLine("Oleh"); // Додаємо
module.showLine(); // Oleh
module.getLength(); // 4
module.reverse(); // helO

// 5.4
// Створити модуль калькулятор, який може додавати, віднімати, множити, ділити, і приводити до ступеню(степени).
// (Значення повинне зберігатись в змінній не в this)

type TypeModuleCalc = {
  setFirstNumber: (firstNum: number) => TypeModuleCalc;
  plusOperation: (number: number) => TypeModuleCalc;
  multipleOperation: (number: number) => TypeModuleCalc;
  getTotalResultCalc: () => void;
  toExtent: (number: number) => TypeModuleCalc;
};

const moduleCalc: TypeModuleCalc = (function () {
  let totalResultCalc = 0;
  let hasCalled = false;

  function firstValue(value: number) {
    totalResultCalc += value;
  }

  return {
    setFirstNumber: function (firstNum) {
      if (hasCalled) totalResultCalc = 0;

      firstValue(firstNum);

      hasCalled = true;
      return moduleCalc;
    },
    plusOperation: function (number) {
      totalResultCalc += number;
      return moduleCalc;
    },
    multipleOperation: function (number) {
      totalResultCalc *= number;
      return moduleCalc;
    },
    getTotalResultCalc: function () {
      console.log(totalResultCalc);
    },
    toExtent: function (number) {
      totalResultCalc = Math.pow(totalResultCalc, number);
      return moduleCalc;
    },
  };
})();

moduleCalc.setFirstNumber(10); // значення = 10
moduleCalc.plusOperation(5); // значення += 5
moduleCalc.multipleOperation(2); // значення *= 2
moduleCalc.getTotalResultCalc(); // вивести в консоль 30

moduleCalc.setFirstNumber(10).toExtent(2).getTotalResultCalc(); // 100

// 6.
// Реалізувати функцію sum.

type Sum = (
  firstName: number
) => (secondNum: number) => (thirdNum: number) => number;

const sum: Sum = (firstNum) => {
  return function (secondNum) {
    return function (thirdNum) {
      return firstNum + secondNum + thirdNum;
    };
  };
};

sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
