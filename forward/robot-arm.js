/*
Use a rotary potentiometer (pot) to control the position of a servo.

  * Attach a potentiometer to pin A2
  * Attach a servo to pin 9
  * Have the servo rotate as the potentiometer is turned
  
*/

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {
  var servo = new five.Servo(10);

  potentiometer = new five.Sensor({
    pin: "A2",
    freq: 250
  });

  potentiometer.scale(0, 179).on("data", function() {
    servo.to(this.value);
  });


})
