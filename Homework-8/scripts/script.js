// Button Submit
const button = document.querySelector('.button-submit');

// Input
const firstName = document.querySelector('.inp-first-name');
const lastName = document.querySelector('.inp-last-name');
const phoneNumber = document.querySelector('.inp-phone-number');
const email = document.querySelector('.inp-email');
const password = document.querySelector('.inp-password');
const confirmPassword = document.querySelector('.inp-confirm-password');

// Text Error
const errorFirstName = document.querySelector('.p-first-name');
const errorLastName = document.querySelector('.p-last-name');
const errorPhoneNumber = document.querySelector('.p-phone-number');
const errorEmail = document.querySelector('.p-email');
const errorPassword = document.querySelector('.p-password');
const errorConfirmPassword = document.querySelector('.p-confirm-password')

function submitForm() {
    const firsName = showFirstName();
    const lastName = showLastName();
    const phoneNumber = showPhoneNumber();
    const email = showEmail();
    const password = showPassword();

    if (firsName !== undefined && lastName !== undefined && phoneNumber !== undefined && email !== undefined && password !== undefined) {
        if (password === confirmPassword.value) {
            const user = {
                firsName,
                lastName,
                phoneNumber: phoneNumber.length === 10 ? `38${phoneNumber}` : phoneNumber,
                email,
                password,
            }
            console.log(user)
            cleanInputValue()
        }
    }
}

function showFirstName() {
    const valueFirstName = firstName.value;

    if (/^[A-Z][a-z]{2,}$/.test(valueFirstName)) {
        firstName.style.border = '2px solid #3fff00';
        errorFirstName.textContent = ''

        return valueFirstName

    } else if (/^[А-я]/.test(valueFirstName)) {
        firstName.style.border = '2px solid #ff2e2e'
        errorFirstName.textContent = 'Use only Latin letters'

    } else if (/\d/.test(valueFirstName)) {
        firstName.style.border = '2px solid #ff2e2e'
        errorFirstName.textContent = 'Cannot use numbers'

    } else if (/^[A-Z][a-z][a-z]$/.test(valueFirstName)) {
        firstName.style.border = '2px solid #ff2e2e'
        errorFirstName.textContent = 'Use more than 2 letters'

    } else if (/^[a-z]/.test(valueFirstName)) {
        firstName.style.border = '2px solid #ff2e2e'
        errorFirstName.textContent = 'The first letter should be capitalized'

    } else {
        firstName.style.border = '2px solid #ff2e2e'
        errorFirstName.textContent = 'Cannot use spase or character'

    }
}

function showLastName() {
    let valueLastName = lastName.value;

    if (/^[A-Z][a-z]{2,}$/.test(valueLastName)) {
        lastName.style.border = '2px solid #3fff00'
        errorLastName.textContent = ''

        return valueLastName

    } else if (/^[А-я]/.test(valueLastName)) {
        lastName.style.border = '2px solid #ff2e2e'
        errorLastName.textContent = 'Use only Latin letters'

    } else if (/\d/.test(valueLastName)) {
        lastName.style.border = '2px solid #ff2e2e'
        errorLastName.textContent = 'Cannot use numbers'

    } else if (/^[A-Z][a-z][a-z]$/.test(valueLastName)) {
        lastName.style.border = '2px solid #ff2e2e'
        errorLastName.textContent = 'Use more than 2 letters'

    } else if (/^[a-z]/.test(valueLastName)) {
        lastName.style.border = '2px solid #ff2e2e'
        errorLastName.textContent = 'The first letter should be capitalized'

    } else {
        lastName.style.border = '2px solid #ff2e2e'
        errorLastName.textContent = 'Cannot use spase or character'
    }
}

function showPhoneNumber() {
    const valuePhoneNumber = phoneNumber.value;
    const newValuePhoneNumber = valuePhoneNumber.replace(/\D/g, '');

    if (/^((\+?3)?8)?(050|063|066|067|068|093|095|096|097|098|099)\d{7}$/.test(newValuePhoneNumber)) {
        phoneNumber.style.border = '2px solid #3fff00';
        errorPhoneNumber.textContent = '';

        return newValuePhoneNumber

    } else if (/[A-zА-я]/.test(newValuePhoneNumber)) {
        phoneNumber.style.border = '2px solid #ff2e2e'
        errorPhoneNumber.textContent = 'Use only digit'

    } else if (/^((\+?3)?8)(050|063|066|067|068|093|095|096|097|098|099)\d{7,}$/.test(newValuePhoneNumber)) {
        phoneNumber.style.border = '2px solid #ff2e2e'
        errorPhoneNumber.textContent = 'A lot of numbers'

    } else if (/^((\+?3)?8)(050|063|066|067|068|093|095|096|097|098|099)\d{0,7}$/.test(newValuePhoneNumber)) {
        phoneNumber.style.border = '2px solid #ff2e2e'
        errorPhoneNumber.textContent = 'Very few numbers'

    } else {
        phoneNumber.style.border = '2px solid #ff2e2e'
        errorPhoneNumber.textContent = 'You can use only Ukraine operators'
    }
}

function showEmail() {
    const valueEmail = email.value;

    if (/^[A-Za-z_]+[A-Za-z0-9_\.]+[A-Za-z0-9_]+?@[a-z]+\.[a-z]+$/.test(valueEmail)) {
        email.style.border = '2px solid #3fff00';
        errorEmail.textContent = '';

        return valueEmail

    } else {
        email.style.border = '2px solid #ff2e2e';
        errorEmail.textContent = 'Not valid. Example: ivanov@email.ua'
    }
}

function showPassword() {
    const valuePassword = password.value;
    const valueConfirmPassword = confirmPassword.value;

    if (valuePassword === valueConfirmPassword && valuePassword.length > 0 && valueConfirmPassword.length > 0) {
        confirmPassword.style.border = '2px solid #3fff00';
        errorConfirmPassword.textContent = ''
    } else {
        confirmPassword.style.border = '2px solid #ff2e2e';
        errorConfirmPassword.textContent = 'Incorrect password'
    }

    if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(valuePassword)) {
        password.style.border = '2px solid #3fff00';
        errorPassword.textContent = '';

        return valuePassword

    } else if (/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{0,8}/.test(valuePassword)) {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Please enter more than 8 characters';

    } else if (/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(valuePassword)) {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Specify at least one capital letter';

    } else if (/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(valuePassword)) {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Specify at least one lowercase letter';

    } else if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(valuePassword)) {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Specify at least one digit';

    } else if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,}/.test(valuePassword)) {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Specify at least one characters';

    } else if (/^[А-Яа-я]/.test(valuePassword)) {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Use only Latin letters';

    } else {
        password.style.border = '2px solid #ff2e2e';
        errorPassword.textContent = 'Cannot use spase';
    }
}

function cleanInputValue() {
    firstName.value = '';
    lastName.value = ''
    phoneNumber.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = ''

    errorFirstName.textContent = '';
    errorLastName.textContent = ''
    errorPhoneNumber.textContent = '';
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    errorConfirmPassword.textContent = ''

    firstName.style.border = '';
    lastName.style.border = ''
    phoneNumber.style.border = '';
    email.style.border = '';
    password.style.border = '';
    confirmPassword.style.border = ''
}

button.addEventListener('click', submitForm)