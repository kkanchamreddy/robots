/* Turn on the light when the photoresistor light is less than 600*/

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){

  var led = new five.Led(9);
  // Create a new `photoresistor` hardware instance.
 var photoresistor = new five.Sensor({
   pin: "A0",
   freq: 250
 });

 // "data" get the current reading from the photoresistor
  photoresistor.on("data", function() {
    console.log(this.value);
    if(this.value < 600) {
      led.on()
    } else {
      led.off();
    }
  });

});
