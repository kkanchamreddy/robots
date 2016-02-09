/*
* When the temperature sensor detects a temperature above 50°C the piezo should sound and the LED should flash on and off continuously
* If the temperature drops below 50°C the piezo and LED should switch off
* If the button is pressed the piezo and LED should turn off and should not turn on again unless the temperature drops below 50°C
*/

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var isButtonPressed = false;
  var temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });
  var piezo = new five.Piezo(9);
  var led = new five.Led(13);
  var button = new five.Button({
    pin: 5,
    invert: true
  });

temperature.on('data', function() {
    if(isButtonPressed) {
      return;
    }
    if (this.fahrenheit > 80) {
      led.on();
      piezo.frequency(587, 1000);
    } else {
      led.off();
      piezo.off();
    }
  });


  button.on('press', function(){
    isButtonPressed = !isButtonPressed;
    led.off();
    piezo.off();
  });

});
