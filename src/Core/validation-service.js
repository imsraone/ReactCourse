import { getErrorMessages } from "./validation-messages";

const rquiredValidator = (value) => {
    return value !== '';
}

const minLengthValidator = (value, errObj) => {
    return value.length >= errObj.length;
}

const maxLengthValidator = (value, errObj) => {
    return value.length <= errObj.length;
}

const patternValidator = (value, errObj) => {
    return errObj['regex'].test(value);
}

const checkValidation = (value, err, errObj) => {
    switch (err) {
        case 'required':
            return rquiredValidator(value);
        case 'minlength':
            return minLengthValidator(value, errObj);
        case 'maxlength':
            return maxLengthValidator(value, errObj);
        case 'pattern':
            return patternValidator(value, errObj);
    }
}

const findAllErrors = (validators, value) => {
    if (!validators) return [];
    const errors = Object.keys(validators);
    let errorsOccured = [];
    for (let err of errors) {
        if (!checkValidation(value, err, validators[err])) {
            errorsOccured.push(getErrorMessages(err, validators[err]));
        }
    }
    return errorsOccured;
}

export { findAllErrors };