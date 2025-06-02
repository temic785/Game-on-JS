import {Game} from "./game.js";
import {GameStatuses} from "./GAME_STATUSES.js";

describe("game", () => {
    it("should have Pending status after creating", () => {
        const game = new Game();
        expect(game.status).toBe(GameStatuses.PENDING);
    })
    it("should have InProgress status after creating", () => {
        const game = new Game();
        game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS);
    })
    it("google should have be in the Grid but in new position after jump", async () => {
        const game = new Game();
        game.googleJumpInterval = 1;
        game.start()
        for (let i = 0; i < 100; i++) {
            const prevGooglePosition = game.googlePosition;
            await delay(1)
            const cuutrentGooglePosition = game.googlePosition;
            expect(prevGooglePosition).not.toEqual(cuutrentGooglePosition);
        }
    })
})
const delay = (ms) => new Promise(res => setTimeout(res, ms))

describe('Game class playerPositions setter/getter', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test('should set and get player positions correctly', () => {
        const positions = {
            player1: { x: 1, y: 2 },
            player2: { x: 3, y: 4 },
        };

        game.playerPositions = positions;
        expect(game.player).toEqual(positions);
    });

    test('should overwrite previous player positions', () => {
        const initialPositions = {
            player1: { x: 0, y: 0 },
            player2: { x: 0, y: 0 },
        };

        game.playerPositions = initialPositions;
        expect(game.player).toEqual(initialPositions);

        const newPositions = {
            player1: { x: 2, y: 2 },
            player2: { x: 3, y: 3 },
        };

        game.playerPositions = newPositions;
        expect(game.player).toEqual(newPositions);
    });

    test('should allow setting null positions', () => {
        const nullPositions = {
            player1: { x: null, y: null },
            player2: { x: null, y: null },
        };

        game.playerPositions = nullPositions;
        expect(game.player).toEqual(nullPositions);
    });
});
