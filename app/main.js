import {log} from "./Logger.js";
import {Game} from "./Game.js";

document.addEventListener("DOMContentLoaded", () => {
	log("Initialized App");

	let game = new Game("game");
});