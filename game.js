import {GameStatuses} from "./GAME_STATUSES.js";

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
    }
    #status = GameStatuses.PENDING
    #googlePosition = null

    get status() {
        return this.#status;
    }

    get gridSize() {
        return this.#settings.gridSize;
    }

    get googlePosition() {
        return this.#googlePosition;
    }

    start() {
        this.#status = GameStatuses.IN_PROGRESS;
        this.#googlePosition = {

        }
    }
}

