require("source-map-support").install();
const jasmine = require("jasmine");

const tests = new jasmine();
tests.loadConfig({
	spec_dir: "./build",
	spec_files: ["**/__tests/*.js"]
});

tests.execute();