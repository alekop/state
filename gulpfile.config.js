'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './src';

        this.tsOutputPath = './dist';
        this.allJavaScript = [this.source + '/**/*.js'];
        this.allTypeScript = this.source + '/**/*.ts';
    }
    return gulpConfig;
})();
module.exports = GulpConfig;