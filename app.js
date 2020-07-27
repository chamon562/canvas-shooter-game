let movementDisplay;
let ctx;
let gameArea;
let mainHero;
let clientX;
let clientY;
let enemyOne;




//Crawler Constructor function
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

}

const gameLoop = () =>{
    // clearing the canvas game area back to zero
    ctx.clearRect(0, 0, gameArea.width, gameArea.height);
    //TODO make movement display with mouse
    // movementDisplay.textContent = `X:${mainHero.x}\nY:${mainHero.this..y} `;
    //show the enemyOne if ogre is alive
    if(enemyOne.alive){
      //render enemyOne to show 
     enemyOne.render()
     //TODO detect hit by being clicked on
    //  detectHit()
    }
    // enemyTwo.render()
    // enemyThree.render()
    // enemyFour.render()
    // mainHero.render()

}


//get keycode
//w: 87 a:65 s:83 d:68
function keyDownHandler(event) {
    console.log(event)
        if(event.keyCode == 68) {
            rightPressed = true;
        }
        else if(event.keyCode == 65) {
            leftPressed = true;
        }
        if(event.keyCode == 68) {
            downPressed = true;
        }
        else if(event.keyCode == 87) {
            upPressed = true;
            
        }
    }
function keyUpHandler(event) {
    console.log(event)
        if(event.keyCode == 68) {
            rightPressed = false;
        }
        else if(event.keyCode == 65) {
            leftPressed = false;
        }
        if(event.keyCode == 68) {
            downPressed = false;
        }
        else if(event.keyCode == 87) {
            upPressed = false;
            
        }
    }
    
 

  
 
 

 
 
 
    //  enemyTwo = new Crawler(275, 175, 80, 80, 'green');
    //  enemyThree = new Crawler(175, 175, 80, 80, 'orange');
    //  enemyFour = new Crawler(475, 175, 80, 80, 'purple');
    
    
    document.addEventListener('DOMContentLoaded', ()=>{
        console.log('Dom is linked');
        //link the movementDisplay
        movementDisplay = document.getElementById('movement');
        console.log('movement linked')
        //link the game layout 
        gameArea = document.getElementById('game-area');
        console.log('game area linked');
        
        //canvas config making game area play field
        gameArea.setAttribute('height', 480);
        gameArea.setAttribute('width', 800);
        ctx = gameArea.getContext('2d');
        //crawler takes in(x, y, width, height, color)
        //this is the (x,y) coord the crawler will be on 
        //and the crawler size and color 
        // set up click event function should e.x and e.y
        
        // mainHero = new Crawler(100, 100, 40, 40, 'blue');
        //TODO need to make mouse movement as contrlor instead of WASD keys
        //and first document.addEventListener('click', movementHandler)
        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);
        gameArea.addEventListener('mousedown', function (e){
            //shows clientx and client y click coordiantes
            console.log(e);
            let mouseX = e.clientX - gameArea.offsetLeft;
            console.log(mouseX);
            let mouseY = e.clientY - gameArea.offsetTop; 
            console.log(mouseY);
            //forumla for hit detection with mouse
            if (mouseX >= this.x && mouseX < this.x+this.width && 
                mouseY >= this.y && mouseY < this.y+this.height );
                    document.getElementById('status').innerHTML = 'you touched' + enemyOne;
            });
            enemyOne = new Crawler(100, 50, 50, 50, 'red');
            
            // mainHero = new Crawler(50, 80, 20, 20, 'blue'); 
            // document.addEventListener('click', click)
            //under this enemyOne eventListener for linking mouse movement? or onclick?
    // document.addEventListener('click', movementHandler );
    let runGame = setInterval(gameLoop, 60);

})

//keep track of where those random locations 
//variables keeping track of squares and dimensions
//what do i need to compare in order do that
//if computer doesnt know where it is then user cant click 
//generate their location of the enemy and store it and compare it. 