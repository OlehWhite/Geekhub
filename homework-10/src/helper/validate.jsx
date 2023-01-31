export const REQUIRED = 'Required';

export function validatePassword(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    if (!/^\S*$/.test(value)) {
        result.push("Password must not contain Whitespaces.");
    } else if (!/^(?=.*[A-Z]).*$/.test(value)) {
        result.push("Password must have at least one Uppercase Character.");
    } else if (!/^(?=.*[a-z]).*$/.test(value)) {
        result.push("Password must have at least one Lowercase Character.");
    } else if (!/^(?=.*[0-9]).*$/.test(value)) {
        result.push("Password must contain at least one Digit.");
    } else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(value)) {
        result.push("Password must contain at least one Special Symbol.");
    } else if (!/^.{10,16}$/.test(value)) {
        result.push("Password must be 10-16 Characters Long.");
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

    if (/^[A-Z][a-z]{2,}$/.test(value)) {
        return true
    } else if (/^[А-я]/.test(value)) {
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
        return true
    } else if (!/^[A-Za-z_]+[A-Za-z0-9_\.]+[A-Za-z0-9_]+?@[a-z]+\.[a-z]+$/.test(value)) {
        result.push('Not valid. Example: ivanov_ivan.33@email.ua')
    } else {
        return false
    }

    return result.length === 0 ? null : result.join('. ');
}

export function validatePhoneNumber(value, { required } = {}) {
    const result = [];

    if (required && !value) {
        result.push(REQUIRED)
    }

    if (/^((\+?3)?8)?(050|063|066|067|068|093|095|096|097|098|099)\d{7}$/.test(value)) {
        return true
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