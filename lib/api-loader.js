"use strict";

var Q = require('q');
var postscribe = require('postscribe');
var deferred = Q.defer();
var promise = deferred.promise;
function loadAPI(APIKey) {
    var url = 'https://apis.daum.net/maps/maps3.js?apikey=' + APIKey + '&libraries=services';
    if (!promise.isFulfilled()) {
        postscribe(window.document.head, '<script src="' + url + '"></script>', {
            done: function done() {
                deferred.resolve(window['daum']['maps']);
            },
            error: function error(e) {
                deferred.reject(e);
            }
        });
    }
    return promise;
}
exports.loadAPI = loadAPI;
function getDaumMapAPI() {
    if (!window['daum'] || !window['daum']['maps']) {
        throw new Error('Daum Map not loaded yet!');
    }
    return window['daum']['maps'];
}
exports.getDaumMapAPI = getDaumMapAPI;