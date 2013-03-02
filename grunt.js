/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		meta: {
			version: '0.1.1-beta',
			banner: '/*! srcdoc-polyfill - v<%= meta.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'* http://github.com/jugglinmike/srcdoc-polyfill/\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
				'Mike Pennisi; Licensed MIT */'
		},
		lint: {
			files: ['grunt.js', 'srcdoc-polyfill.js']
		},
		qunit: {
			files: ['test/**/*.html']
		},
		concat: {
			dist: {
				src: ['<banner:meta.banner>', '<file_strip_banner:srcdoc-polyfill.js>'],
				dest: 'srcdoc-polyfill.min.js'
			}
		},
		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'srcdoc-polyfill.min.js'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				// The shim relies on script URLs to function
				scripturl: true
			}
		},
		uglify: {}
	});

	// Default task.
	grunt.registerTask('default', 'lint qunit concat min');

};
