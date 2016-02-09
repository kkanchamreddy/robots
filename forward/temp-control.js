/* Turn on the light when the photoresistor light is less than 600*/

var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var temperature = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  });
  
  temperature.on('data', function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });

})
