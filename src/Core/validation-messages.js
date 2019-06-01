const ERROR_MESSAGES = {
    required: () => `This field is required`,
    minlength: (len) => `Min ${len.length} chars is required`,
    maxlength: (len) => `Max allowed chars is ${len.length}`,
    pattern: (parm) => `Incorrect format entered`
}

export const getErrorMessages = (err, errObj) => {
    return ERROR_MESSAGES[err](errObj);
}