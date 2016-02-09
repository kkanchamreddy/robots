var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {
  var motor = new five.Motor(9);

  function run() {
    motor.start(200);
    board.wait(2000, function(){
      motor.stop();
      board.wait(1000, run);
    });
  }

  run();
})
