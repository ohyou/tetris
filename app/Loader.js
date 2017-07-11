import {log} from "./Logger.js";
require("pixi.js");

export class VisualLoader extends PIXI.Container {
	constructor(complete_callback) {
		super();
		log("Loader started");

		this.complete_callback = complete_callback;
	}

	onProgress() {

	}

	onComplete() {
		this.complete_callback();
	}
}