const io = require("socket.io-client");
const five = require("johnny-five");
const config = require("./config");
var board = new five.Board({ debug:true});

var i =10;


console.log('IN Arduino : Connecting to ' , config.url);

// Connect to the socket server
const socket = io.connect(config.url);
board.on("ready", function() {
  var servo = new five.Servo(9);
  var stepper = new five.Stepper({
    type: five.Stepper.TYPE.DRIVER,
    stepsPerRev: 200,
    pins: {
      step: 3,
      dir: 4
    }
  });

  socket.on("led:on", function() {
    console.log("ARDUINO.JS:   ",    "emitting led:on from ard");

    console.log("LED ON");
  });

  socket.on("led:off", function() {
    console.log("ARDUINO.JS:   ", "emitting led:of from ard");
    console.log("LED OFF");
  });

  socket.on("sweep:on",function(data,which){
    
    console.log('XXXXX sweep on from arduino  '  ,data," on ",which, " servo");
  
    servo.to(data);
    console.log("VAL: ",servo.value);

    console.log("-----");
  });



  socket.on("step:on",function(numr){

    console.log('XXXXX step on from arduino  ', numr);
    let steps = numr*50;

    stepper.rpm(60).ccw().step(steps,function(){
      console.log("ran ",steps , " rounds");
    });

  });
    

  /*board.on("ready", function() {

      var stepper = new five.Stepper({
        type: five.Stepper.TYPE.DRIVER,
        stepsPerRev: 200,
        pins: {
          step: 3,
          dir: 4
        }
      });

    // Make 10 full revolutions counter-clockwise at 180 rpm with acceleration and deceleration
      stepper.rpm(30).ccw().step(20000, function() {

      console.log("Done moving CCW: 360 degs");

      // once first movement is done, make 10 revolutions clockwise at previously
      //      defined speed, accel, and decel by passing an object into stepper.step
    
      });
    });*/





  /*10 degs on refresh servo

  socket.on("sweep:on",function(data){
    
    console.log('XXXXX sweep on from arduino  '  ,data);
    if(i+1>180)
      i=0;
    else
      i+=10;
    var servo = new five.Servo(9);
    servo.to(i);
    console.log("VAL: ",servo.value);

    console.log("-----");
    

  });*/


  /*
  servo
  socket.on("sweep:on",function(){
    
    console.log('XXXXX sweep on from arduino');
    if(i+1>180)
      i=0;
    else
      i+=10;
    var servo = new five.Servo(9);
    servo.to(i);
    console.log("VAL: ",servo.value);

  });*/
});
