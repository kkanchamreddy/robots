var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function(){
  var led = new five.Led(9);
  var button = new five.Button({
    pin: 5,
    invert: true
  });

  button.on('press', function(){
    led.toggle();
  })
});
