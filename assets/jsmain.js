"use strict";
var jsmain = {};
jsmain.getURL = function() {
    var url = location.href;
    return url;
}
jsmain.getOURL = function() {
    var url = location.origin;
    return url;
}
jsmain.getParam = function(param) {
    var url = location.search;
    return url;
}
