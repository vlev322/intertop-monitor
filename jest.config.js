module.exports = {
	transform: {
		"^.+\\.ts$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
	modulePaths: ["<rootDir>"],
	moduleFileExtensions: ["ts", "js"]
};
