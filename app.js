let movementDisplay;
let ctx;
let gameArea;
let clientX;
let clientY;
let enemyOne;
let enemyTwo;
let enemyThree;
let enemyFour;

let score = 0;


//TODO MAKE SCORE




//Crawler Constructor function
class Crawler{
constructor(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.alive = true;
    // this.image = new Image();
    //     if(src){
    //         this.image.src = src;
    //     }
    //this.render is like draw
    this.render = function(){
        // if(this.image.src){
        //     ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        // } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height)

        // }
    }

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
    // } else{
    //   ctx.clearRect(0, 0, this.width, this.height);
    // setTimeout(function(){
    // enemyOne.render()
    // }, 3000)
    }
    if(enemyTwo.alive){
        enemyTwo.render()
    }
    if(enemyThree.alive){
        enemyThree.render()
    }
    if(enemyFour.alive){
        enemyFour.render()
    }

}

// let enemies = new Crawler(enemyOne, enemyTwo, enemyThree, enemyFour)



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
    
 
function isIntersect(x, y,  enemy){
    if (x >= enemy.x && x < enemy.x+enemy.width && 
        y >= enemy.y && y < enemy.y+enemy.height) {
        console.log('you clicked enemy ' + enemy.color)
        document.getElementById('status').innerHTML = 'you destryoed the ' + enemy.color + ' enemy!';
        return true;
    
        }
        return false;
}


 //TODO function to link image background and enemies
 



        document.addEventListener('DOMContentLoaded', ()=>{
        console.log('Dom is linked');
        //link the movementDisplay
        movementDisplay = document.getElementById('movement');
        console.log('movement linked')
        //link the game layout 
        gameArea = document.getElementById('game-area');
        console.log('game area linked');
        
        //canvas config making game area play field
        gameArea.setAttribute('height', 600);
        gameArea.setAttribute('width', 800);
        ctx = gameArea.getContext('2d');
        // let imgObj = new Image();
        // imgObj.onload = function () {
        //     let w = gameArea.width;
        //     let nw = imgObj.naturalWidth;
        //     let nh = imgObj.naturalHeight;
        //     let aspect = nw/nh;
        //     let h = gameArea.width / aspect;
        //     gameArea.height = h;
        // };
        // imgObj.src = './Users/apple/Downloads/Sniper stuff/sniper background/Keg-Background.jpg';        
        
        
        //crawler takes in(x, y, width, height, color)
        enemyOne = new Crawler(375, 0, 80, 80, 'orange');
        enemyTwo = new Crawler(275, 450, 175, 150, 'green');
        enemyThree = new Crawler(175, 300, 80, 90, 'red');
        enemyFour = new Crawler(475, 350, 80, 100, 'purple');
        // mainHero = new Crawler(100, 100, 40, 40, 'blue');
        //TODO need to make mouse movement as contrlor instead of WASD keys

        
        // document.addEventListener('keydown', keyDownHandler, false);
        // document.addEventListener('mousemove', crossHair);
        gameArea.addEventListener('mousedown', function (e){
        


            //shows clientx and client y click coordiantes
            // console.log(e.offsetX);
            // console.log(e.offsetY);
            // console.log('click: ' + e.offsetX + '\ ' + e.offsetY ) 
            let mouseX = e.clientX ;
            console.log('mouseX position: ', mouseX);
            let mouseY = e.clientY ; 
           
            console.log('mouseY position: ', mouseY);
            console.log('enemyX: ', enemyOne.x);
            console.log('enemyY: ', enemyOne.y);
            console.log('enemy width: ', enemyOne.width);
            console.log('enemy height: ', enemyOne.height);

            // forumla for hit detection with mouse
            // y position starts up lower and ends down higher from top to bottom
            // x gets starts lower from left and goes bigger to right
            //TODO refactor to make enemies an array
           if(isIntersect(e.offsetX, e.offsetY, enemyOne)){
               console.log('you hit enemyOne');
               enemyOne.alive = false;
               setTimeout(function(){
                enemyOne.alive = true
               }, 3000)
               
               //how to set time interval and respawn enemy back with 
               //funciton in here?
               }

           if(isIntersect(e.offsetX, e.offsetY, enemyTwo)){
               console.log('you hit enemyTwo');
               enemyTwo.alive = false;
               setTimeout(function(){
                enemyTwo.alive = true
               }, 3000)

                
           }

           if(isIntersect(e.offsetX, e.offsetY, enemyThree)){
               console.log('you hit enemyThree');
               enemyThree.alive = false;
               setTimeout(function(){
                enemyThree.alive = true
               }, 3000)
                
           }

           if(isIntersect(e.offsetX, e.offsetY, enemyFour)){
               console.log('you hit enemyFour');
               enemyFour.alive = false;
               setTimeout(function(){
                enemyFour.alive = true
               }, 3000)
              
           }
          });
            
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