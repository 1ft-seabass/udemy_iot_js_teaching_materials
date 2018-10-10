var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var light = new five.Light("A0");
  light.on("change", function() {
    console.log(this.level);
  });
});