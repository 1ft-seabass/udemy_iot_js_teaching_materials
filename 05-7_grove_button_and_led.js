// johnny-fiveライブラリの準備
var five = require("johnny-five");

// USBに接続されているArduino Unoボードの呼び出し
// new five.Board() で記述すると指定なし呼び出しして自動で探します
var board = new five.Board();
// var board = new five.Board({ port:"COM3" }); // Windowsの場合
// var board = new five.Board({ port:"COM3" }); // Macの場合

var button;
var led;

board.on("ready", function() {
    button = new five.Button(3);
    led = new five.Led(2);

    button.on("down", function() {
        console.log("down");
        led.on();
    });

    button.on("hold", function() {
        console.log("hold");
    });

    button.on("up", function() {
        console.log("up");
        led.off();
    });
});
