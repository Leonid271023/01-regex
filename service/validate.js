const validateEcmoscript = text =>{
    const pattern = /^ *ecmascript([1-9]|1[0-6])?$/i;
    return pattern.test(text);
}

module.exports = validateEcmoscript;