var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var button = new five.Button(2);
  button.on("up", function() {
    // 拍手で反応
    console.log("clap");
  });
});