import {GameStatuses} from "./GAME_STATUSES.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";
import {Position} from "./Position.js";
import {GoogleSettings, GridSettings} from "./settings.js";

export class Game {
    #settings = {
        gridSize: new GridSettings(4, 4),
        googleSettings: new GoogleSettings(1000),
    }
    #point = 0;
    #pointForEndGame = 100;
    #status = GameStatuses.PENDING
    #player = {
        player1: new Position(),
        player2: new Position()
    }
    #googlePosition = new Position()
    #intervalId = null
    /**
     * @type SamuraiNumberUtility
     */
    #numberUtility;

    constructor() {
        this.#numberUtility = new SamuraiNumberUtility()
    }

    set googleJumpInterval(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error("Google jump interval must be a positive number")
        }
        this.#settings.googleSettings.googleJumpInterval = value
    }

    set playerPositions(newPositions) {
        this.#player = newPositions;
    }

    get status() {
        return this.#status;
    }

    get gridSize() {
        return this.#settings.gridSize;
    }

    get googlePosition() {
        return this.#googlePosition;
    }

    get player() {
        return this.#player;
    }


    start() {
        this.#status = GameStatuses.IN_PROGRESS;
        this.#jumpGoogle()

        this.#playerPosition("player1");
        this.#playerPosition("player2");

        this.#intervalId = setInterval(() => {
            this.#jumpGoogle();

            if (this.#point >= this.#pointForEndGame) {
                clearInterval(this.#intervalId);
                this.#status = GameStatuses.COMPLETED;
            }

        }, this.#settings.googleSettings.googleJumpInterval);

    }

    #jumpGoogle() {

        const newPosition = new Position(
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount),
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount)
        );

        if (newPosition.equals(this.#googlePosition)) {
            this.#jumpGoogle()
            return
        }
        this.#googlePosition = newPosition;
        this.#point++;
    }

    #playerPosition(playerName) {
        const currentPlayer = playerName === "player1" ? "player2" : "player1";
        const currentPosition = this.#player[currentPlayer];
        const newPosition = new Position(
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount),
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount)
        );

        if (newPosition.equals(currentPosition)) {
            this.#playerPosition(playerName)
            return
        }
        this.#player[playerName] = newPosition;
    }
}

