'use strict';
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;
  if (this.x > 505) {
    this.x = 0;
    this.speed = 100 + Math.floor(Math.random() * 300);
  }
  if (player.x < this.x + 80 &&
    player.x + 80 > this.x &&
    player.y < this.y + 60 &&
    player.y + 60 > this.y) {
    player.x = 200;
    player.y = 400;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = "images/char-boy.png";
};
// creating a player in particular direction on canvas
var player = new Player(200, 400);
// to display the player on canvas,we use this method.
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.update = function(dt) {

};
// keys handling for user on keyboard
Player.prototype.handleInput = function(keyevent) {

  if (keyevent === 'right' && this.x < 385) {
    this.x += 101;

  } else if (keyevent === 'left' && this.x > 0) {
    this.x -= 100;
  } else if (keyevent === 'up' && this.y > 0) {
    this.y -= 83;
  } else if (keyevent === 'down' && this.y < 375) {
    this.y += 83;
  } else if (this.y < 0) {
    setTimeout(() => {
      alert("congratulations.");
      this.x = 200;
      this.y = 400;
    }, 300);
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
// we 
let allEnemies = [];
//here given different enemies positions on that screen.
let ememypositions = [80, 125, 160, 240];

for (var i in ememypositions) {
  let enemy = new Enemy(0, ememypositions[i], 256);
  allEnemies.push(enemy);
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
