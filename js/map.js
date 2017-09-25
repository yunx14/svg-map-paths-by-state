"use strict";

var Map = (function(){
	var svg = {},
		datum = [];

	function init(el, data) {
		if (el) {
			svg = d3.select("#"+el);
			datum = data;
			bindToEl(svg, data);
		} else {
			console.log("please supply an element to bind");
		}
	}

	function bindToEl(svg, data) {

	  svg.selectAll("path")
	  	.data(data)
	  	.enter()
	  	.append("path")
	  	.attr("class", function(d) {
	  		return d.State;
	  	})
	  	.attr("d", function(d) {
	  		return d.d;
	  	});
	}

	return {
		"init": init
	}
}());

Map.init("map-container", mapdata);