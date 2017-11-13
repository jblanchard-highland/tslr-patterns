'use strict';
console.log('!!!');
module.exports = {
	compile: {
		options: {
		  style: 'compressed',
		  compass: false
		},
		files: {
			'<%= cfg.root %><%= cfg.dest.styles %>main.css' : '<%= cfg.root %><%= cfg.src.styles %>main.scss'
		}
	  }
};