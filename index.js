var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var BerryIMU = require('node-berryimu');
var od = require('open-drone');

var RPIOMotor = od.motors.RPIOMotor;
var ODController = od.controller;
var motors = {
  0: new RPIOMotor("FL", 17),
  1: new RPIOMotor("FR", 8),
  2: new RPIOMotor("BR", 12),
  3: new RPIOMotor("BL", 11)
};
for (var i in motors) motors[i].setW(1);
setTimeout(function() {
  for (var i in motors) motors[i].setW(0);
  var sensometer = new BerryIMU();
  sensometer.initialize(function() {
    var controller = new ODController(motors, sensometer);
    require('async').whilst(function() {
      return true;
    }, function(callback) {
      controller.update(callback);
    });
  });
}, 1000);
