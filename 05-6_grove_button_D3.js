// johnny-fiveライブラリの準備
var five = require("johnny-five");

// USBに接続されているArduino Unoボードの呼び出し
// new five.Board() で記述すると指定なし呼び出しして自動で探します
var board = new five.Board({ port:"COM3" });
// USBに複数デバイスが接続されているなど自動で見つからないときはArduino IDEでの指定ポートを参考に名指しで指定
// var board = new five.Board({ port:"COM3" }); // Windowsでポートが COM3 の場合
// var board = new five.Board({ port:"/dev/cu.usbmodem1411" }); // Macでポートが /dev/cu.usbmodem1411 の場合

board.on("ready", function() {
    // D3に接続されたGrove ボタンをボタン操作オブジェクトとして変数buttonに入れる
    var button = new five.Button(3);
    // ボタンを押したときのdownイベント
    button.on("down", function() {
        console.log("down");
    });
    // ボタンを押し続けたときのholdイベント
    button.on("hold", function() {
        console.log("hold");
    });
    // ボタンを離したときのupイベント
    button.on("up", function() {
        console.log("up");
    });
});
