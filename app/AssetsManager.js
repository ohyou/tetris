import {err} from "./Logger.js";

export class AssetsManager {
	constructor() {
		this.resources = {};
	}

	getFillerTexture() {
		return null; // TODO
	}

	getTexture(id) {
		let resource = this.resources[id];

		if (resource && resource.texture) return resource.texture;

		for (let k in this.resources) {
			let textures = this.resources[k].textures;
			if (textures && textures[id]) return textures[id];
		}

		err("Failed to load texture", id);
		return this.getFillerTexture();
	}
}