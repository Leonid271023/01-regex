const validateEcmascriptText = text => {
    const pattern = /^ *ecmascript([1-9]|1[0-6])?$/i;
    return pattern.test(text);
}


const validateDomainZone = text => {
    const pattern = /^(\w|[.-])+\.(com|org|il)$/i;
    return pattern.test(text);
}


module.exports = {validateEcmascriptText, validateDomainZone}
