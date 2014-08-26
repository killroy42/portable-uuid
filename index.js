(function(){
'use strict';
	
	var
		rng = require('portable-rng')(),
		uuid;

	function setRng(newRng) {
		rng = newRng;
	}

	uuid = function () {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = rng() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	};

	// export in common js
	if( typeof module !== "undefined" && ('exports' in module)){
		module.exports = uuid;
		module.exports.setRng = setRng;
	}

})();