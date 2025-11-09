const validateEcmoscriptText = require('./validate');


test('should return true if ECMAscript is provided', () => {
    expect(validateEcmoscriptText('  ecmascript')).toBe(true);
    expect(validateEcmoscriptText('ecmascript')).toBe(true);
    expect(validateEcmoscriptText('  ecmascript6')).toBe(true);
    expect(validateEcmoscriptText('  ecmascript16')).toBe(true);
    expect(validateEcmoscriptText('  ECMAScript')).toBe(true);
});