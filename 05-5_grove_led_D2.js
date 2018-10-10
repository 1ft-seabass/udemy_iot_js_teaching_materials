// johnny-fiveライブラリの準備
var five = require("johnny-five");

// USBに接続されているArduino Unoボードの呼び出し
// new five.Board() で記述すると指定なし呼び出しして自動で探します
var board = new five.Board({ port:"COM3" });
// USBに複数デバイスが接続されているなど自動で見つからないときはArduino IDEでの指定ポートを参考に名指しで指定
// var board = new five.Board({ port:"COM3" }); // Windowsでポートが COM3 の場合
// var board = new five.Board({ port:"/dev/cu.usbmodem1411" }); // Macでポートが /dev/cu.usbmodem1411 の場合

// Arduino Unoボードが接続されたときの ready イベント
// 今回はD2に接続されたGrove LEDを点滅させます
board.on("ready", function() {
    // D2に接続されたGrove LEDをLED操作オブジェクトとして変数ledに入れる
    var led = new five.Led(2);
    // 1000msec = 1秒で点滅させる指示
    led.blink(1000);
});
