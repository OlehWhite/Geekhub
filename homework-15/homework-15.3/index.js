// 2. HOF - High order functions
var validMethodName = function (arrayWords, callbackToUpperCaseFirstLetter) {
    return arrayWords.map(function (string) { return callbackToUpperCaseFirstLetter(string); }).join('');
};
var validCallbackName = function (firstLetterOfTheWord) {
    return firstLetterOfTheWord[0].toUpperCase() + firstLetterOfTheWord.slice(1);
};
console.log(validMethodName(['my', 'name', 'is', 'Vasya'], validCallbackName));
var validMethodNumber = function (arrayNumbers, callbackMultiply) {
    return arrayNumbers.map(function (number) { return callbackMultiply(number); }).join();
};
var validCallNumber = function (multiplyByTwo) {
    return multiplyByTwo * 10;
};
console.log(validMethodNumber([10, 20, 30], validCallNumber));
var validMethodObject = function (arrayObj, callbackNameAndAge) {
    return arrayObj.map(function (element) { return callbackNameAndAge(element); }).join();
};
var validCallbackObject = function (item) {
    return "".concat(item.name, " is ").concat(item.age);
};
console.log(validMethodObject([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], validCallbackObject));
var validMethodReturnElement = function (arrayElements, callbackReverseElement) {
    return arrayElements.map(function (element) { return callbackReverseElement(element); }).join();
};
var validCallbackReverseElement = function (str) {
    return str.split('').reverse().join('');
};
console.log(validMethodReturnElement(['abc', '123'], validCallbackReverseElement));
var rectangle = {
    width: 4,
    height: 2,
    getSquare: function () {
        return this.width * this.height;
    }
};
rectangle.getSquare();
var price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        var percent = this.price * (parseInt(this.discount) / 100);
        return this.price - percent;
    }
};
price.getPrice();
price.getPriceWithDiscount();
var numerator = {
    value: 1,
    double: function () {
        this.value++;
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
};
numerator.double().plusOne().plusOne().minusOne();
numerator.value; // 3
var element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
var getElementHeight = function () { return element.getHeight(); };
getElementHeight(); //25
var convertToObject = function (number) { return ({ value: number, isOdd: Boolean(number % 2) }); };
convertToObject(10); // { value: 10, isOdd: false }
var minus = function (firstNumber) {
    if (firstNumber === void 0) { firstNumber = 0; }
    return function (secondNumber) {
        if (secondNumber === void 0) { secondNumber = 0; }
        return firstNumber - secondNumber;
    };
};
minus(10)(6); // 4
var multiplyMarker = function (firstNumber) {
    var hasCalled = false;
    var firstOperation;
    return function (arg) {
        if (hasCalled)
            return firstOperation *= arg;
        hasCalled = true;
        firstOperation = firstNumber(arg);
        return firstOperation;
    };
};
var multiply = multiplyMarker(function (num) { return num * 2; });
multiply(2); // 4
multiply(3); // 12
var module = (function () {
    var privateResult = '';
    function showStr(val) {
        privateResult += val;
    }
    return {
        setLine: function (line) {
            if (line === void 0) { line = ''; }
            showStr(line);
        },
        showLine: function () {
            return privateResult;
        },
        getLength: function () {
            return privateResult.length;
        },
        reverse: function () {
            return privateResult.split('').reverse().join('');
        }
    };
})();
module.setLine('Oleh'); // Додаємо
module.showLine(); // Oleh
module.getLength(); // 4
module.reverse(); // helO
var moduleCalc = (function () {
    var totalResultCalc = 0;
    var hasCalled = false;
    function firstValue(value) {
        totalResultCalc += value;
    }
    return {
        setFirstNumber: function (firstNum) {
            if (hasCalled)
                totalResultCalc = 0;
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
        }
    };
})();
moduleCalc.setFirstNumber(10); // значення = 10
moduleCalc.plusOperation(5); // значення += 5
moduleCalc.multipleOperation(2); // значення *= 2
moduleCalc.getTotalResultCalc(); // вивести в консоль 30
moduleCalc.setFirstNumber(10).toExtent(2).getTotalResultCalc(); // 100
var sum = function (firstNum) {
    return function (secondNum) {
        return function (thirdNum) {
            return firstNum + secondNum + thirdNum;
        };
    };
};
sum(1)(2)(3); // 6
sum(2)(3)(4); // 9
sum(1)(2)(4); // 7
