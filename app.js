let canvas = document.getElementById('game-area');
        console.log('game area linked');
        
        //canvas config making game area play field
        canvas.setAttribute('height', 600);
        canvas.setAttribute('width', 800);
 
let ctx = canvas.getContext('2d');
let playAudio = document.getElementById('backgroundMusic');
let movementDisplay;
let clientX;
let clientY;
let enemyOne;
let enemyTwo;
let enemyThree;
let enemyFour;
//TODO MAKE SCORE Count each death on enemy
let score = 0;
let oneY = 0;
let oneX = 0;
let twoY = 0;
let twoX = 0;
let threeX = 0;
let threeY = 0;
let fourY = 0;
let fourX = 0;
let startDelay = 0;


function playBackgroundMusic(){
    playAudio.play()
}



//Crawler Constructor function
class Crawler{
    constructor(x, y, width, height, color, speed, type){
    this.type = type;
    if(type == 'image'){
        this.image = new Image();
        this.image.src = color;
    }
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = canvas.getContext('2d');
        if(type == 'image'){
            ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    this.width = width;
    this.height = height;
    this.color = color;
    this.alive = true;
    //trying to add in speed 
    this.speed = speed;
    //this.dx the changes in x position
        // if(src){
            // this.image.src = src;
        // }
    // this.render is like draw
    this.render = function enemy(){
        // if(this.image.src){
        //     ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        // } else {
            ctx.fillStyle = this.type;
            ctx.fillRect(this.x, this.y, this.width, this.height)
            
        // }
        }

        

    }

    

}


      
  

function renderEnemies(){
    
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

        if(enemyTwo.alive){
            enemyTwo.render()
            if(twoY < 15 && twoX > -20){
                twoY += 1;
                twoX += 1;
                
                enemyTwo.y -= 10
                console.log(enemyTwo.x)
                console.log(enemyTwo.y)
          } else if (twoY == -200 && twoX == -200){
              twoY = 0;
              twoX = 0;
              console.log(enemyTwo.x)
              console.log(enemyTwo.y)
          }
          //starting point for sqaure
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        
          ctx.fillRect(enemyTwo.x, enemyTwo.y, 200, 150)
        }
        if(enemyThree.alive){
          enemyThree.render()

          if(threeY < 15 && threeX > -20){
            threeY += 1;
            threeX += 1;
            
            enemyThree.x += 12
          
      } else if (threeY == -200 && threeX == -200){
          threeY = 0;
          threeX = 0;
          
      }
      //starting point for sqaure
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   
      ctx.fillRect(enemyThree.x, enemyThree.y, 80, 90)
         

      }
      if(enemyFour.alive){
          enemyFour.render()


          if(fourY < 15 && fourX > -20){
            fourY += 1;
            fourX += 1;
            
            enemyFour.x -= 25
          
      } else if (fourY == -200 && fourX == -200){
          fourY = 0;
          fourX = 0;
          
      }
      //starting point for sqaure
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   
      ctx.fillRect(enemyFour.x, enemyFour.y, 80, 120)
      }

}
const gameLoop = () =>{
    // clearing the canvas game area back to zero
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //TODO make movement display with mouse
    // movementDisplay.textContent = `X:${mainHero.x}\nY:${mainHero.this..y} `;
    //show the enemyOne if ogre is alive
    if(startDelay === 0){
        setTimeout(function(){
            renderEnemies()
            startDelay = 5
        }, 3000)
    } else {
        renderEnemies()
    }
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
    
 
function isIntersect(x, y,  enemy){
    if (x >= enemy.x && x < enemy.x+enemy.width && 
        y >= enemy.y && y < enemy.y+enemy.height) {
        console.log('you clicked enemy ' + enemy.color)
        document.getElementById('status').innerHTML = 'you destryoed the enemy!';
        return true;
    
        }
        return false;
}
//function for enemies to move in and out of screen
// select the enemy i want 
//move starting from x to another x or y to another y



//TODO function to link image background and enemies



        document.addEventListener('DOMContentLoaded', ()=>{
        console.log('Dom is linked');
        //link the movementDisplay
        
       
        movementDisplay = document.getElementById('movement');
        console.log('movement linked')
        
        
        //crawler takes in(x, y, width, height, color)
        enemyOne = new Crawler(375, -100, 80, 80,'orange');
        console.log(enemyOne)
        enemyTwo = new Crawler(275, 600, 300, 300, 'green');
        enemyThree = new Crawler(-120, 300, 80, 90, 'red');
        enemyFour = new Crawler(800, 350, 80, 100, 'purple');
        // mainHero = new Crawler(100, 100, 40, 40, 'blue');
        //TODO need to make mouse movement as contrlor instead of WASD keys

        
        // document.addEventListener('keydown', keyDownHandler, false);
        // document.addEventListener('mousemove', crossHair);
        canvas.addEventListener('mousedown', function (e){
        


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
                enemyOne.alive = true; 
                //make X and Y random to pop up in different places
                oneY = 0
                oneX = 0
                enemyOne.y = -100;
                renderEnemies()
               }, 3000)
               //math.random
               //how to set time interval and respawn enemy back with 
               //funciton in here?
               }

           if(isIntersect(e.offsetX, e.offsetY, enemyTwo)){
               console.log('you hit enemyTwo');
               enemyTwo.alive = false;
               setTimeout(function(){
                enemyTwo.alive = true
                twoY = 0
                twoX = 0
                enemyTwo.y = 600
                renderEnemies()
               }, 3000)

                
           }

           if(isIntersect(e.offsetX, e.offsetY, enemyThree)){
               console.log('you hit enemyThree');
               enemyThree.alive = false;
               setTimeout(function(){
                enemyThree.alive = true
                threeY = 0
                threeX = 0
                enemyThree.x = 0
                renderEnemies()
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


