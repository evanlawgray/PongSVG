# Pong Game

A basic pong game using SVGs.

## Setup

**Install:**

`> npm i`

**Run:**

`> npm start`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down

## Stretch Goals Implemented

* 1: Add multiple balls when player score exceeds 5. (score:5 -- balls: 2; score: 10 -- balls: 3)
* 2: Stop the game when a player's score reaches 20 and declare that player the winner ("Pong" in h1 is replaced by "Winner : [winning player]" with a color/scale changing animation).

## Learning Outcomes

* 1: I learned a lot about the construction and proper uses of Classes in javascript/ES6, including how to use the Class and New keywords, the nature and purpose of constructor functions, and how using Classes can help make your code much more modular and scaleable.

* 2: I learned a lot about how simple games are designed and built within the front end. Developing a more nuanced, technical concept of the game element as a static, but constantly regenerating SVG image with changing properties was extremely useful when implementing changes later.

* 3: At the start of this project I had almost no knowledge of svg elements and their properties (except for the general concept of vector graphics). I now feel that I have a much better understanding of how to use SVGs and am no longer intimidated by the apparent complexity of SVG graphics (though the <path> element is still somewhat mysterious to me).

* 4: Using webpack to organize and bundle my project files (including non-script file types like css) gave me a better insight into the process of writing "production" code, and provided useful practice in organizing more complex project folders.
