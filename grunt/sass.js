'use strict';

module.exports = {
	compile: {
		options: {
			paths: [
				"<%= cfg.root %><%= cfg.src.styles %>"
			]
		},
		files: {
			"<%= cfg.root %><%= cfg.dest.styles %>main.css" :
			"<%= cfg.root %><%= cfg.src.styles %>main.sass"
		}
	},
	sourceMap: {
		options : {
			optimization : 2,
			sourceMap : true,
			sourceMapFileInline : true,
			dumpLineNumbers : 'false'
		},
		src: "<%= cfg.root %><%= cfg.src.styles %>main.sass",
		dest: "<%= cfg.root %><%= cfg.dest.styles %>main.css"
	}
};