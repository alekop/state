'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
    	var tsGlob = '/**/*.ts',
    		jsGlob = '/**/*.js';

        this.mainSrc = './src' + tsGlob;
        this.testSrc = './test' + tsGlob;
        this.tsOutputPath = './dist';
        this.testOutputFile = this.tsOutputPath;
    }
    return gulpConfig;
})();
module.exports = GulpConfig;