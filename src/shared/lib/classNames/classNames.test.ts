import { classNames } from './classNames'

describe('classNamse', () => {
    test('with one parameter', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional classes', () => {
        const result = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(result)
    })
    test('with mods', () => {
        const result = 'someClass class1 class2 hovered scrolled'
        expect(classNames('someClass', {'hovered': true, 'scrolled': true}, ['class1', 'class2'])).toBe(result)
    })
})