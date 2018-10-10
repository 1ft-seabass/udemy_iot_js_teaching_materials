// IFTTT用の設定
// イベント名
var IFTTT_EVENT_NAME = 'udemy';
// WebHookのセキュリティキー
var IFTTT_SECURITY_KEY = '------------WebHookのセキュリティキーを入力------------';

// POSTリクエストを作るライブラリの準備
// requestライブラリ
var _request = require('request');

// IFTTTへ送るためのPOSTリクエストの設定
var options = {
    uri: 'http://maker.ifttt.com/trigger/' + IFTTT_EVENT_NAME + '/with/key/' + IFTTT_SECURITY_KEY,
    form: {
        value1:'WebHook Text Udemy!!!!',
        value2:2,
        value3:3
    },
    json: true
};

console.log('---------- [output]');

// 上記設定を元にPOSTリクエストする
_request.post(options, function(error, response, body){
    if (!error && response.statusCode == 200) {
        console.log(body);
    } else {
        console.log('error: '+ response.statusCode);
    }
});
