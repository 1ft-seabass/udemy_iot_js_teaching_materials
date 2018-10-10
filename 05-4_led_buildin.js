// johnny-fiveライブラリの準備
var five = require("johnny-five");

// USBに接続されているArduino Unoボードの呼び出し
// new five.Board() で記述すると指定なし呼び出しして自動で探します
var board = new five.Board();
// USBに複数デバイスが接続されているなど自動で見つからないときはArduino IDEでの指定ポートを参考に名指しで指定
// var board = new five.Board({ port:"COM3" }); // Windowsでポートが COM3 の場合
// var board = new five.Board({ port:"/dev/cu.usbmodem1411" }); // Macでポートが /dev/cu.usbmodem1411 の場合

// Arduino Unoボードが接続されたときの ready イベント
// 今回は内蔵LEDを点滅させます
board.on("ready", function() {
    // 内蔵LED 13番ポートをLED操作オブジェクトとして変数ledに入れる
    var led = new five.Led(13);
    // 1000msec = 1秒で点滅させる指示
    led.blink(1000);
});
