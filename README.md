# Classic Arcade Game Clone Project
In this project player want to move from grass to water without collision of enemy bugs. it is a logical and tricky Game.

# download the project from GitHub repository

You can download the starter code from following link :
1) The Arcade Game project repository on GitHub :
https://github.com/udacity/frontend-nanodegree-arcade-game
## Table of Contents
This project contains following folders and files :
1. CSS folder
2. images folder
3. js folder
4. index.html file
5. README.md file

## How to Run the project
  After extracting the project open the index.html in any web browser to see the output.

- [Instructions](#instructions)
- [Contributing](#contributing)
## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
# Steps involved in this Game
**step1** Here we need to provide the speed and direction for enemies in initial stage of game
**step2** After that we need to update the enemy speed and also enemies cross the screen with different speeds and also checking for any collision occurred.
**step3** we are using render() method for draw that enemy on the screen.
**step4** After that we need to create the Player and given the image and position on the screen  for that player.
**step5** We are applying handleInput() method for Player controlling through keyboard keys.   
**step6** After that we are created a array(allEnemies[]) and updated a more than 2 Enemies in that array.
**step7** We need to check this logic(if Player can not move the Out of screen and if collision occurred player got into their initial position and Player reached destination then we got a alert and placed the player in initial position).

# Instructions to play this Game
1. left and right arrows for player moving left side and right side.
2. meanwhile Up and Down arrows for player moving up and down.
3. Player need to go for grass to water(bottom to top) without touching the enemies bugs then u got a alert message and player got their initial position in screen.
4. if touches the bug to the player will comes into their initial position.
## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
