export function log() {
	if ("$$BUILD_TYPE$$" !== "dev") return;
	console.log.apply(console, Array.prototype.slice.call(arguments, 0));
}

export function err() {
	console.error.apply(console, Array.prototype.slice.call(arguments, 0));
}