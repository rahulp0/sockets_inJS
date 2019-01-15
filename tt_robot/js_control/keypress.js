var five = require("johnny-five");
var keypress = require("keypress");
//var board = new five.Board( { debug:true});
var board = new five.Board();
board.on("ready", function() {
 var esc1 = new five.ESC(12);
 var esc2 = new five.ESC(11);

  var speed = 13;
  var speed1 = 13;
 // esc.speed(speed);
console.log("WORKS");
  console.log ('ESC' , esc1);
  console.log('ESC', esc2);	
  // Hold shift+arrow-up, shift+arrow-down to incrementally
  // increase or decrease speed.

  function controller(ch, key) {
    var isThrottle = false;
     var isThrottle1 = false;
    //var speed = esc.last ? esc.speed : 0;
    console.log ( 'Pressed key  key ' , key );

    if (key && key.shift) {
      if (key.name === "up") {
	//speed += 0.01;
        speed += 1;
        console.log('Pressed up speed is for motor1 XXX ', speed);            	       
	//board.info('pressed up ', speed);
        isThrottle = true;
      }

      if (key.name === "down") {
        speed -= 1;
        console.log('Pressed down speed is ',speed);            	       
	//board.info('pressed down ', speed);
        isThrottle = true;
      }

      if (isThrottle) {
	console.log('sETTING ESC TO ', speed);
        esc1.speed(speed);
      }
     if (key.name === "right") {
	//speed += 0.01;
        speed1 += 1;
        console.log('Pressed up speed is XXX ', speed1);            	       
	//board.info('pressed up ', speed);
        isThrottle1 = true;
      }

      if (key.name === "left") {
        speed1 -= 1;
        console.log('Pressed down speed is ',speed1);            	       
	//board.info('pressed down ', speed);
        isThrottle1 = true;
      }
     if (isThrottle1) {
	console.log('sETTING ESC TO ', speed1);
        esc2.speed(speed1);
      }
    }
  }

  keypress(process.stdin);
  console.log ('starting');
  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();
});
