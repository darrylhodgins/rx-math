module.exports = function(config){
	config.set({
		basePath: './',
		frameworks: ['jasmine', 'es6-shim', 'karma-typescript'],
		files: [
			{ pattern: '../src/**/*.ts' },
			{ pattern: './specs/**/*.ts' }
		],
		exclude: [],
		preprocessors: {
			'../src/**/*.ts':  ['karma-typescript', 'sourcemap'],
			'./specs/**/*.ts':  ['karma-typescript', 'sourcemap']
		},
		karmaTypescriptConfig: {
			compilerOptions: config.compilerOptions || {
				noEmitHelpers: false,
				importHelpers: true
			},
			reports: {
				html: {
					directory: './coverage/rx-math',
					subdirectory: '.',
					filename: 'report'
				},
				lcovonly: {
					directory: './coverage/rx-math',
					subdirectory: '.',
					filename: 'lcov.info'
				}
			}
		},
		reporters: ['spec', 'karma-typescript', 'junit',  'threshold'],
		junitReporter: {
			outputDir: './coverage/rx-math',
			outputFile: 'junit-results.xml',
			suite: 'rx-math',
			useBrowserName: false
		},
		thresholdReporter: {
			statements: 90,
			branches: 75,
			functions: 90,
			lines: 90
		},
		port: 9876,
		colors: true,
		autoWatch: false,
		browsers: ['PhantomJS'],
		singleRun: true
	});
};
