import {log} from "./Logger.js";
require("pixi.js");

export class VisualLoader extends PIXI.Container {
	constructor() {
		super();
		log("Loader started");
	}

	onProgress() {

	}

	onComplete() {
		this.visible = false;
	}
}