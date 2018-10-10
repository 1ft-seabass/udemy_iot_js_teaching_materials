var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

    
    // http://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/
    var B = 4275;
    var R0 = 100000;   

    var thermometer = new five.Thermometer({
        pin: "A0",
        toCelsius: function(raw) {
            var R = 1023.0 /raw - 1.0;
            R = R0*R;
            
            var val = 1.0/(Math.log(R/R0)/B+1/298.15)-273.15;
            return Math.round(val * 10) / 10;
        }
    });

    thermometer.on("change", function() {
        console.log(this.celsius + "°C");
    });
});