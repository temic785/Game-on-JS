export class SamuraiNumberUtility {
    /**
     * Returns a random integer between the specified `fromInclusive` (inclusive)
     * and `toExclusive` (exclusive).
     *
     * @param {number} fromInclusive - The minimum value (inclusive) of the range.
     * @param {number} toExclusive - The maximum value (exclusive) of the range.
     * @returns {number} A random integer between `fromInclusive` and `toExclusive - 1`.
     * @throws {Error} Throws an error if `fromInclusive` is not less than `toExclusive`.
     */
    getRandomInteger(fromInclusive, toExclusive) {
        if (fromInclusive >= toExclusive) throw new Error("From must be less then to")
        return Math.floor(Math.random() * (toExclusive - fromInclusive) + fromInclusive);
    }
}