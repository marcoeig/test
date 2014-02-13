(function(window, document, undefined) {
'use strict';

var app = angular.module('twyn.filters', []);

app.filter("paginationFilter", function() {
	return function(items, currentPage, perPage) {
		var currentPageIntern = currentPage || 1;
		var perPageIntern = perPage || 10;
		var start = perPageIntern * (currentPageIntern - 1);
		return items ? items.slice(start, start + perPageIntern) : [];
	};
});

})(this, document);