// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'}
};

exports.server = {
	hostname: "0.0.0.0"
};

exports.plugins = {
	babel: {
		presets: ["latest"]
	}
};