export const REQUIRED = 'Required';

export function validatePassword(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(value)) {
        return
    } else if (/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{0,8}/.test(value)) {
        result.push('Please enter more than 8 characters')
    } else if (/(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(value)) {
        result.push('Specify at least one capital letter')
    } else if (/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(value)) {
        result.push('Specify at least one lowercase letter')
    } else if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(value)) {
        result.push('Specify at least one digit')
    } else if (/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,}/.test(value)) {
        result.push('Specify at least one characters')
    } else if (/^[А-Яа-я]/.test(value)) {
        result.push('Use only Latin letters')
    } else if (value.length > 0){
        result.push('Incorrect password')
    }

    return result.length === 0 ? null : result.join('. ');
}

export function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return `Passwords don't match`
    }
}

export function validateName(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    if (/^[А-я]/.test(value)) {
        result.push('Use only Latin letters')
    } else if (/\d/.test(value)) {
        result.push('Cannot use numbers')
    } else if (/^[A-Z][a-z][a-z]$/.test(value)) {
        result.push('Use more than 2 letters')
    } else if (/^[a-z]/.test(value)) {
        result.push('The first letter should be capitalized')
    }

    return result.length === 0 ? null : result.join('. ');
}

export function validateEmail(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    if (/^[A-Za-z_]+[A-Za-z0-9_\.]+[A-Za-z0-9_]+?@[a-z]+\.[a-z]+$/.test(value)) {
        return
    } else {
        result.push('Not valid. Example: ivanov_ivan.33@email.ua')
    }

    return result.length === 0 ? null : result.join('. ');
}

export function validatePhoneNumber(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    if (/^((\+?3)?8)?(050|063|066|067|068|093|095|096|097|098|099)\d{7}$/.test(value)) {
        return
    } else if (/[A-zА-я]/.test(value)) {
        result.push('Use only digit');
    } else if (/^((\+?3)?8)?(050|063|066|067|068|093|095|096|097|098|099)\d{7,}$/.test(value)) {
        result.push('A lot of numbers');
    } else if (/^((\+?3)?8)?(050|063|066|067|068|093|095|096|097|098|099)\d{0,7}$/.test(value)) {
        result.push('Very few numbers');
    } else {
        result.push('You can use only Ukraine operators');
    }

    return result.length === 0 ? null : result.join('. ');
}

export function validGenderAndCheckboxAgree(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    return result.length === 0 ? null : result.join('. ');
}