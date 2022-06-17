// JSmain.js
// Author: script1000
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
jsmain.tpTo = function(url) {
    var redirect = url;
    window.location.href(redirect);
}
jsmain.bTT = function(bin) {
    var bins = bin;
    var text_decoder = new TextDecoder('utf-8');
    var rsl = text_decoder.decode(Uint8Array.from(bins).buffer);
    console.log('Bin to Text Decoded');
    console.log(rsl);
    return rsl;
}
