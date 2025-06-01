export class SamuraiNumberUtility {
    getRandomInteger(fromInclusive, toExclusive) {
        if (fromInclusive >= toExclusive) throw new Error("From must be less then to")
        return Math.floor(Math.random() * (toExclusive - fromInclusive) + fromInclusive);
    }
}