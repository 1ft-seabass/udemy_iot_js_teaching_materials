// johnny-fiveライブラリの準備
var five = require("johnny-five");

// USBに接続されているArduino Unoボードの呼び出し
// new five.Board() で記述すると指定なし呼び出しして自動で探します
var board = new five.Board();
// USBに複数デバイスが接続されているなど自動で見つからないときはArduino IDEでの指定ポートを参考に名指しで指定
// var board = new five.Board({ port:"COM3" }); // Windowsでポートが COM3 の場合
// var board = new five.Board({ port:"/dev/cu.usbmodem1411" }); // Macでポートが /dev/cu.usbmodem1411 の場合

// IFTTT用の設定
// イベント名
var IFTTT_EVENT_NAME = 'udemy';
// WebHookのセキュリティキー
var IFTTT_SECURITY_KEY = '------------WebHookのセキュリティキーを入力------------';

// POSTリクエストを作るライブラリの準備
// requestライブラリ
var _request = require('request');

console.log("[Udemy IFTTT Message App]");

// Arduino Unoボードが接続されたときの ready イベント
board.on("ready", function() {
    // D3に接続されたGrove ボタンをボタン操作オブジェクトとして変数buttonに入れる
    var button = new five.Button(3);
    // ボタンを押したときのdownイベント
    button.on("down", function() {
        console.log("down");

        console.log('---------- [output]');

        // IFTTTへ送るためのPOSTリクエストの設定
        var options = {
            uri: 'http://maker.ifttt.com/trigger/' + IFTTT_EVENT_NAME + '/with/key/' + IFTTT_SECURITY_KEY,
            form: {
                value1:'Udemy IFTTT Message!!!!',
                value2:2,
                value3:3
            },
            json: true
        };

        // 上記設定を元にPOSTリクエストする
        _request.post(options, function(error, response, body){
            if (!error && response.statusCode == 200) {
                console.log(body);
            } else {
                console.log('error: '+ response.statusCode);
            }
        });

    });
});
