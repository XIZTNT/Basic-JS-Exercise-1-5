const arr = require('../practice/05_arrays_and_loops');
const array1 = [92, 84, 76, 45, 96, 79, 99, 59, 52, 68, 32];
const array2 = ['Bill', 'Ted', 'Andy', 'Melissa', 'Tisha', 'Zach'];
const array3 = [4, 6, 10, 25];


// TEST 1
// REMOVE X FROM DESCRIBE TO RUN TEST //
describe('first', () => {
    test('returns first element from array', () => {
        expect(arr.first(array1)).toBe(92);
        expect(arr.first(array2)).toBe('Bill');
        expect(arr.first(array3)).toBe(4);
    });
});

// TEST 2
describe('howMany', () => {
    test('returns the length of an array', () => {
        expect(arr.howMany(array1)).toBe(11);
        expect(arr.howMany(array2)).toBe(6);
        expect(arr.howMany(array3)).toBe(4);
    });
});

// TEST 3
describe('last', () => {
    test('returns last element from array', () => {
        expect(arr.last(array1)).toBe(32);
        expect(arr.last(array2)).toBe('Zach');
        expect(arr.last(array3)).toBe(25);
    });
});

// TEST 4
describe('forLoopSum', () => {
    test('returns sum of all elements using forloop', () => {
        expect(arr.forLoopSum(array1)).toBe(782);
        expect(arr.forLoopSum(array3)).toBe(45);
    });
});

// TEST 5
describe('forLoopHighest', () => {
    test('returns largest number of array using for loop', () => {
        expect(arr.forLoopHighest(array1)).toBe(99);
        expect(arr.forLoopHighest(array3)).toBe(25);
    });
});

// TEST 6
describe('forEachLoopSum', () => {
    test('returns sum of all elements using forloop', () => {
        expect(arr.forEachLoopSum(array1)).toBe(782);
        expect(arr.forEachLoopSum(array3)).toBe(45);
    });
});

// TEST 7
describe('forEachLoopHighest', () => {
    test('returns largest number of array using while loop', () => {
        expect(arr.forEachLoopHighest(array1)).toBe(99);
        expect(arr.forEachLoopHighest(array3)).toBe(25);
    });
});

// TEST 8
describe('whileLoopSum', () => {
    test('returns sum of all elements using forloop', () => {
        expect(arr.whileLoopSum(array1)).toBe(782);
        expect(arr.whileLoopSum(array3)).toBe(45);
    });
});

// TEST 9
describe('whileLoopHighest', () => {
    test('returns largest number of array using while loop', () => {
        expect(arr.whileLoopHighest(array1)).toBe(99);
        expect(arr.whileLoopHighest(array3)).toBe(25);
    });
});