var GamecubeGamepad = function(index, deadzone) {
  if (!index) index = 0;
  if (!deadzone) deadzone = 0.075;
  this.axes = {};
  this.buttons = {};
  this.initialized = false;
  this.index = index;
  this.deadzone = deadzone;
};

GamecubeGamepad.prototype.update = function() {
  var gamepad = navigator.getGamepads()[this.index];

  if (gamepad) {
    var axes = {
      joystickX: gamepad.axes[0],
      joystickY: -gamepad.axes[1],
      cStickX: gamepad.axes[5],
      cStickY: -gamepad.axes[2],
      lTrigger: gamepad.axes[3],
      rRrigger: gamepad.axes[4]
    };

    var buttons = {
      a: gamepad.buttons[1].pressed,
      b: gamepad.buttons[2].pressed,
      x: gamepad.buttons[0].pressed,
      y: gamepad.buttons[3].pressed,
      z: gamepad.buttons[7].pressed,
      start: gamepad.buttons[9].pressed,
      dpadUp: gamepad.buttons[12].pressed,
      dpadDown: gamepad.buttons[14].pressed,
      dpadLeft: gamepad.buttons[15].pressed,
      dpadRight: gamepad.buttons[13].pressed
    };

    if (this.initialized) {
      if (this.axes.joystickX !== axes.joystickX) this.onJoystickX(axes.joystickX);
      if (this.axes.joystickY !== axes.joystickY) this.onJoystickY(axes.joystickY);
      if (this.axes.cStickX !== axes.cStickX) this.onCStickX(axes.cStickX);
      if (this.axes.cStickY !== axes.cStickY) this.onCStickY(axes.cStickY);
      if (this.axes.lTrigger !== axes.lTrigger) this.onLTrigger(axes.lTrigger);
      if (this.axes.rTrigger !== axes.rTrigger) this.onRTrigger(axes.rTrigger);
      if (this.buttons.a !== buttons.a) this.onA(buttons.a);
      if (this.buttons.b !== buttons.b) this.onB(buttons.b);
      if (this.buttons.x !== buttons.x) this.onX(buttons.x);
      if (this.buttons.y !== buttons.y) this.onY(buttons.y);
      if (this.buttons.z !== buttons.z) this.onZ(buttons.z);
      if (this.buttons.start !== buttons.start) this.onStart(buttons.start);
      if (this.buttons.dpadUp !== buttons.dpadUp) this.onDpadUp(buttons.dpadUp);
      if (this.buttons.dpadDown !== buttons.dpadDown) this.onDpadDown(buttons.dpadDown);
      if (this.buttons.dpadLeft !== buttons.dpadLeft) this.onDpadLeft(buttons.dpadLeft);
      if (this.buttons.dpadRight !== buttons.dpadRight) this.onDpadRight(buttons.dpadRight);
    } else this.initialized = true;

    this.axes = axes;
    this.buttons = buttons;
  }
};

GamecubeGamepad.prototype.onJoystickX = function() {};
GamecubeGamepad.prototype.onJoystickY = function() {};
GamecubeGamepad.prototype.onCStickX = function() {};
GamecubeGamepad.prototype.onCStickY = function() {};
GamecubeGamepad.prototype.onLTrigger = function() {};
GamecubeGamepad.prototype.onRTrigger = function() {};
GamecubeGamepad.prototype.onA = function() {};
GamecubeGamepad.prototype.onB = function() {};
GamecubeGamepad.prototype.onX = function() {};
GamecubeGamepad.prototype.onY = function() {};
GamecubeGamepad.prototype.onZ = function() {};
GamecubeGamepad.prototype.onStart = function() {};
GamecubeGamepad.prototype.onDpadUp = function() {};
GamecubeGamepad.prototype.onDpadDown = function() {};
GamecubeGamepad.prototype.onDpadLeft = function() {};
GamecubeGamepad.prototype.onDpadRight = function() {};
