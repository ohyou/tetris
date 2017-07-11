process.env.BUILD_TYPE = process.env.BUILD_TYPE || "dev";

exports.files = {
  javascripts: {joinTo: "app.js"},
  stylesheets: {joinTo: "app.css"}
};

exports.server = {
	hostname: "0.0.0.0"
};

exports.plugins = {
	babel: {
		presets: ["latest"]
	},

	replace: {
		encoding: "utf8",
		log: true,
		mappings: {
			"BUILD_TYPE": process.env.BUILD_TYPE
		},
		paths: [
			"public/app.js"
		],
		replacePrefix: "$$",
		replaceSuffix: "$$"
	}
};

exports.modules = {
	autoRequire: {
		"app.js": ["main"]
	}
};