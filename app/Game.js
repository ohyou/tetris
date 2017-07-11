import {log} from "./Logger.js";
import {APP_SETTINGS} from "./constants.js";
require("pixi.js");

import {VisualLoader} from "./Loader.js";

export class Game extends PIXI.Application {
	constructor(container_id) {
		super(APP_SETTINGS);
		log("Initialized Game");

		this.view.setAttribute("class", "game-canvas");

		this.DOMcontainer = document.getElementById(container_id) || document.body;
		this.DOMcontainer.appendChild(this.view);

		window.addEventListener("resize", this.onResize.bind(this), false);
		this.onResize();

		this.visual_loader = new VisualLoader();
		this.stage.addChild(this.visual_loader);

		this.loader.on("progress", this.visual_loader.onProgress, this.visual_loader);
		this.loader.on("complete", this.visual_loader.onComplete, this.visual_loader);

		//this.loader.add(...)
		//this.loader.load(this.initialize.bind(this))
	}

	initialize(loader, resources) {
		log("Resources loaded", resources);
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