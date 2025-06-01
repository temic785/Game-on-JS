import {Game} from "./game.js";
import {GameStatuses} from "./GAME_STATUSES.js";

describe("game", ()=> {
    it("should have Pending status after creating", ()=> {
        const game = new Game();
        expect(game.status).toBe(GameStatuses.PENDING);
    })
    it("should have InProgress status after creating", ()=> {
        const game = new Game();
        game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS);
    })
    it("google should have be in the Grid after start", ()=> {
        const game = new Game();
        game.start()
        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)

    })
})