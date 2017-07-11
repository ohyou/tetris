import {log} from "./Logger.js";
import {APP_SETTINGS} from "./constants.js";
require("pixi.js");

export class Game extends PIXI.Application {
	constructor(container_id) {
		super(APP_SETTINGS);

		log("Initialized Game");

		this.view.setAttribute("class", "game-canvas");

		this.DOMcontainer = document.getElementById(container_id) || document.body;
		this.DOMcontainer.appendChild(this.view);

		window.addEventListener("resize", this.onResize.bind(this), false);
		this.onResize();
	}

	onResize() {
		if (this.DOMcontainer && this.DOMcontainer.clientWidth) {
			var w = this.DOMcontainer.clientWidth;
			var h = this.DOMcontainer.clientHeight;
		} else {
			var w = document.body.offsetWidth;
			var h = document.body.offsetHeight;
		}

		let scale = Math.min(w / this.renderer.width, h / this.renderer.height);

		this.renderer.view.style.width = (this.renderer.width * scale) + "px";
		this.renderer.view.style.height = (this.renderer.height * scale) + "px";
	}
}