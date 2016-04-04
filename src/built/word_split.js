/// <reference path="../ts/node.d.ts" />
/// <reference path="../ts/xml2js.d.ts" />
"use strict";
var config = require('./config');
var http = require('http');
var xml2js = require('xml2js');
function split(text) {
    var words = [];
    var parse = xml2js.parseString;
    var path = '/MAService/V1/parse?appid=' + config.yahoo_id + '&results=ma';
    path += '&sentence=' + encodeURI(text);
    var options = {
        host: 'jlp.yahooapis.jp',
        path: path,
        method: 'GET'
    };
    http.get(options, function (res) {
        res.setEncoding('utf8');
        res.on('error', function (e) {
            console.log(e.message);
        });
        res.on('data', function (data) {
            parse(data, function (err, result) {
                if (!err || result !== undefined) {
                    result.ResultSet.ma_result[0].word_list[0].word.forEach(function (word) {
                        words.push(word.surface);
                    });
                }
                else {
                    console.log(err.message);
                }
            });
        });
    }).on('error', function (e) {
        console.log(e.message);
    });
    return words;
}
exports.split = split;
