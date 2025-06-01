import {SamuraiNumberUtility} from './samurai-number-utility.js';

describe('SamuraiNumberUtility.getRandomInteger (exclusive upper bound)', () => {
    let util;

    beforeEach(() => {
        util = new SamuraiNumberUtility();
    });

    test('returns value in [0, 5)', () => {
        for (let i = 0; i < 100; i++) {
            const n = util.getRandomInteger(0, 5);
            expect(n).toBeGreaterThanOrEqual(0);
            expect(n).toBeLessThan(5);
        }
    });

    test('returns value in [-3, 1)', () => {
        for (let i = 0; i < 100; i++) {
            const n = util.getRandomInteger(-3, 1);
            expect(n).toBeGreaterThanOrEqual(-3);
            expect(n).toBeLessThan(1);
        }
    });

    test('returns value in [-1, 2)', () => {
        for (let i = 0; i < 100; i++) {
            const n = util.getRandomInteger(-1, 2);
            expect(n).toBeGreaterThanOrEqual(-1);
            expect(n).toBeLessThan(2);
        }
    });

    test('returns single value when toExclusive = fromInclusive + 1', () => {
        for (let i = 0; i < 20; i++) {
            expect(util.getRandomInteger(7, 8)).toBe(7);
        }
    });




    test('range with size 3 includes all possible numbers', () => {
        const set = new Set();
        for (let i = 0; i < 200; i++) {
            set.add(util.getRandomInteger(5, 8));
        }
        expect(set).toEqual(new Set([5, 6, 7]));
    });


    test('non-integer inputs give unexpected results (should be avoided)', () => {
        const result = util.getRandomInteger(1.5, 4.5);
        expect(Number.isInteger(result)).toBe(true); // всё ещё округлит вниз, но это баг по смыслу
    });

    test('statistical test: [1, 4)', () => {
        const counts = {1: 0, 2: 0, 3: 0};
        for (let i = 0; i < 1000; i++) {
            const n = util.getRandomInteger(1, 4);
            counts[n]++;
        }
        expect(Object.keys(counts)).toEqual(['1', '2', '3']);
        expect(counts[1]).toBeGreaterThan(100);
        expect(counts[2]).toBeGreaterThan(100);
        expect(counts[3]).toBeGreaterThan(100);
    });
});
