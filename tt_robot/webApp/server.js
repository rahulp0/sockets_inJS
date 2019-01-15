const express = require("express");
const config = require("./config");
const app = express();

// Development only
if (process.env.NODE_ENV === "development") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config.js");
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static("dist")); // Set 'dist' folder as static assets folder
}

const server = app.listen(process.env.PORT || config.port, function() {
  let port = process.env.PORT || config.port;
  console.log("SERVER.JS:   ","Socket server listening at: " + port);
});


const io = require("socket.io")(server);


io.of("/arduino").on("connection", socket => {
  console.log("New connection: " + socket.id);

  app.get('/servo/:horizontal/:sweep?',function(req,res){
    let which = req.params.horizontal;
    let deg = req.params.sweep;
    res.send(deg);
   
    console.log("SERVER.JS:   "," emitting sweep:on from server->>", socket.id);
    socket.broadcast.emit("sweep:on",(deg) , (which));
    
  });

  app.get('/brushless/:abc/:speed?',function(req,res){
    let motor = req.params.abc;
    res.send(motor);
    res.send(req.params.speed);

  });

  app.get('/stepper/:numRounds',function(req,res){
    let numr = req.params.numRounds;
    res.send(req.params.numRounds );
    socket.broadcast.emit("step:on",(numr));

  });


  socket.on("sweep:on", function() {
    socket.broadcast.emit("sweep:on");
    console.log("SERVER.JS:   ", "sweep ing");
  });
  
  
  socket.on("led:on", function() {
    socket.broadcast.emit("led:on");
    console.log("SERVER.JS:   ","emitting led:on from server");
    console.log("SERVER.JS:   ","Broadcasting: led:on");
  });

  socket.on("led:off", function() {
    socket.broadcast.emit("led:off");
    console.log( "SERVER.JS:   ","emitting led:off from server");

    console.log("SERVER.JS:   ","Broadcasting: led:off");
  });
});

