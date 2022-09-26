const preset = require('postcss-preset-env');

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		preset({stage: 1}),
	],
};