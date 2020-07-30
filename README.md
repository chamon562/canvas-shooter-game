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
function Crawler(x, y, width, height, color, type){
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

4. Giving my enemies movement onto the screen. I had to do alot of playing around with making a new variable oneY oneX for the new x and y, because it made it easier to manpulate. Each logic for each enemy has its own way of being moved by the enemyOne.y or x += 5 and finding a way to increase their way of coming on to the screen using the negative and positive integers was a good learning moment. I console.log the enmies x and y to see check if they were moving.
```Js
if(enemyOne.alive){
        //render enemyOne to show 
            enemyOne.render()  
                        
            if(oneY < 20 && oneX > -20){
                oneY += 1;
                oneX += 1;
                
                enemyOne.y += 5
                console.log(enemyOne.x)
                console.log(enemyOne.y)
          } else if (oneY == -200 && oneX == -200){
              oneY = 0;
              oneX = 0;
              console.log(enemyOne.x)
              console.log(enemyOne.y)
          }
          //starting point for sqaure
          ctx.clearRect(0, 0, canvas.width, canvas.height);
       
          ctx.fillRect(enemyOne.x, enemyOne.y, 80, 80)
          
        }  

```

5. create an attack to make player lose health


8. create attack for enemies to atk back within setinterval of 2 seconds to create a react or player loses health

7. make health by number 3 easy. if player is hit 3 times by enemy, game over.
 
 8. have MVP, have win condition and the game ends 
## visuals 

- use a background of an old wherehouse 
- use boxes or other objects where the 
- add music and sound effects for shooting 