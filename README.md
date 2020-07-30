# canvas-shooter-game
This is my canvas-shooter-game project due week3 


1. start by making a game canvas.
```js
gameArea = document.getElementById('game-area');
    console.log('game area linked');

    //canvas config making game area play field
    gameArea.setAttribute('height', 400);
    gameArea.setAttribute('width', 800);
```
2. make enemy constrcutor function
```js
    // set up to have an enemy
function Crawler(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.alive = true;
    this.render = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    //here is the define attributes to make enemy
    enemyOne = new Crawler(375, 175, 80, 80, 'red');
    nemyTwo = new Crawler(275, 175, 80, 80, 'green');
     enemyThree = new Crawler(175, 175, 80, 80, 'orange');
     enemyFour = new Crawler(475, 175, 80, 80, 'purple');
    //render enemy to show
    enemyOne.render

```

3. make enemyOne, enemyTwo, enemyThree, enemyFour clickable with hit detection. I found the formula for hit detection through alot of different sources. Some by looking up google and some by videos and this is what i came up with. made a function with three perameters. at first i tried with enemyOne and then just changed it to enemy to later be able to reference all. but for now i just wanted it to work. Had to get the intersections from the enemy hit box. I knew i had to be greater than its x value but less than width to get in between the box area. 
```Js
function isIntersect(x, y,  enemy){
    if (x >= enemy.x && x < enemy.x+enemy.width && 
        y >= enemy.y && y < enemy.y+enemy.height) {
        console.log('you clicked enemy ' + enemy.color)
        document.getElementById('status').innerHTML = 'you touched ' + enemyOne.color;
        return true;
    
        }
        return false;
}

```

4. target dies from hit detection succss, now create them to spawn back on setTinterval setTimeout//their place still registers so have to reset board to zero?

5. once hit detection is active enemy disapear. <---> add visual effect to hit like a star or something.//side note <--->

7. once enemies confirm disapear create them random spawn and have animation speed when they come in and out from a certain distance.

8. create attack for enemies to atk back within setinterval of 2 seconds to create a react or player loses health

7. make health by number 3 easy. if player is hit 3 times by enemy, game over.
 
 8. have MVP, have win condition and the game ends 
## visuals 

- use a background of an old wherehouse 
- use boxes or other objects where the 
- add music and sound effects for shooting 