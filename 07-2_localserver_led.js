// johnny-fiveライブラリの準備
var five = require("johnny-five");

// ローカルサーバーライブラリの準備
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

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
  // サーバーを起動する
  app.set('port', (process.env.PORT || 5000));
  app.use(express.static(__dirname + '/public'));

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.listen(app.get('port'), function() {
      console.log("IoT server is running at localhost:" + app.get('port'));
  });

  // /led/onにアクセスするとLEDをON
  app.get('/led/on', function(req, res){
      res.send("/led/on");
      console.log("/led/on");
      // LEDオブジェクトのONの命令 .on() で行う
      led.on();
  });

  // /led/onにアクセスするとLEDをON
  app.get('/led/off', function(req, res){
      res.send("/led/off");
      console.log("/led/off");
      // LEDオブジェクトのOFFの命令 .off() で行う
      led.off();
  });

  // トップページ
  app.get('/', function(req, res){
      res.send("IoT server!!");
  });
});
