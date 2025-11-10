const {validateEcmascriptText, validateDomainZone} = require('./validate');
const {describe, test, expect} = require('@jest/globals');


describe('validateEcmascriptText', () => {
    test('should return true if ECMAScript is provided', () => {
        expect(validateEcmascriptText('   ecmascript')).toBe(true);
        expect(validateEcmascriptText('ecmascript')).toBe(true);
        expect(validateEcmascriptText('   ecmascript6')).toBe(true);
        expect(validateEcmascriptText('   ecmascript16')).toBe(true);
        expect(validateEcmascriptText('   ECMAScript')).toBe(true);
    });


    test('should return false if ECMAScript is not provided', () => {
        expect(validateEcmascriptText('   ecmascrip')).toBe(false);
        expect(validateEcmascriptText('ecmascript0')).toBe(false);
        expect(validateEcmascriptText('   ecmascript19')).toBe(false);
        expect(validateEcmascriptText('10   ecmascript16')).toBe(false);
    });
})


describe('validateDomainZone', () => {
    test('domain is valid', () => {
        expect(validateDomainZone('abrakadabra.il')).toBe(true);
        expect(validateDomainZone('abrakadabra.com')).toBe(true);
        expect(validateDomainZone('abrakadabra.org')).toBe(true);
        expect(validateDomainZone('abra-kadabra.il')).toBe(true);
        expect(validateDomainZone('abra.kadabra2025.il')).toBe(true);
        expect(validateDomainZone('abra_kadabra2025.il')).toBe(true);
    });


    test('domain is not valid', () => {
        expect(validateDomainZone('abrakadabra.ru')).toBe(false);
        expect(validateDomainZone('.com')).toBe(false);
        expect(validateDomainZone('abrakadabraorg')).toBe(false);
        expect(validateDomainZone('abra$kadabra.il')).toBe(false);
    });
})
