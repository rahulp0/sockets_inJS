"use strict";

var express = require('express');
var app = express();
var five = require("johnny-five");
var keypress = require("keypress");
//var board = new five.Board( { debug:true});
var board = new five.Board({ debug:true});
var port = 8000;
//LONGITUDINAL:
var lon_down=160;
var lon_mid=100;
var lon_up=179;

//LATERAL:
var lat_right=60;
var lat_mid=120;
var lat_left=179;


var servo_lat;
var servo_lon;

board.on("ready", function() {
    servo_lat= new five.Servo({
     //id:"tt-bot",
      pin: 9,
      startAt: lat_mid
     //range:[0,80]
     //fps:20
    });
 
    servo_lon= new five.Servo({
      pin: 10,
      startAt: lon_mid
    });
 
    console.log("Bot Ready!\n");
    console.log("VAL", servo_lat.value);
    console.log("VAL", servo_lon.value);

 


  app.get('/servos/:mode/:value?', function (req, res) {
    if(servo_lat && servo_lon) {
      var status = "OK";
      var value = req.params.value; // optional, may be null
      switch(req.params.mode) {
        case "1": // 0 degrees
          console.log('Combination. #1 ');   
          servo_lat.to(lat_left);
          servo_lon.to(lon_up);
          break;
        case "2": // 0 degrees
          console.log('Combination. #2 ');   
          servo_lat.to(lat_mid);
          servo_lon.to(lon_up);
        break;
        case "3": // 0 degrees
          console.log('Combination. #3 ');   
          servo_lat.to(lat_right);
          servo_lon.to(lon_up);
          break;
        case "4": // 0 degrees
          console.log('Combination. #4 ');   
          servo_lat.to(lat_left);
          servo_lon.to(lon_mid);
        break;
        case "5": // 0 degrees
          console.log('Combination. #5 ');   
          servo_lat.to(lat_mid);
          servo_lon.to(lon_mid);
          break;
        case "6": // 0 degrees
          console.log('Combination. #6 ');   
          servo_lat.to(lat_right);
          servo_lon.to(lon_mid);
        break;
        case "7": // 0 degrees
          console.log('Combination. #7 ');   
          servo_lat.to(lat_left);
          servo_lon.to(lon_down);
          break;
        case "8": // 0 degrees
          console.log('Combination. #8 ');   
          servo_lat.to(lat_mid);
          servo_lon.to(lon_down);
        break;
        case "9": // 0 degrees
          console.log('Combination. #9 ');   
          servo_lat.to(lat_right);
          servo_lon.to(lon_down);
          break;
      

        
          
        case "sweep":
          servo_lat.sweep();
          servo_lon.sweep();
          break;
        case "stop":
          servo_lat.stop();
          servo_lon.stop();   
          break;
        case "to":
          if(value !== null) {
            servo_lat.to(value);
            servo_lon.to(value);
          }
        break;
        default:
          status = "Unknown: " + req.params.mode;
        break;
      }
      console.log(status);
      res.send(status);
    } else {
      res.send('Board NOT ready!')
    }
  });
});

app.listen(port, function () {
 console.log('Listening on port ' + port);
});