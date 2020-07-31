let canvas = document.getElementById('game-area');
        console.log('game area linked');
        
        //canvas config making game area play field
        canvas.setAttribute('height', 600);
        canvas.setAttribute('width', 800);
       
       
 
let ctx = canvas.getContext('2d');




let playShotSound = document.getElementById('shotsound');
let hp = document.getElementById('healthPoints');
let killscore = document.getElementById('kills');
let movementDisplay;
let clientX;
let clientY;
let enemyOne;
let enemyTwo;
let enemyThree;
let enemyFour;
//TODO MAKE SCORE Count each death on enemy

let oneY = 0;
let oneX = 0;
let twoY = 0;
let twoX = 0;
let threeX = 0;
let threeY = 0;
let fourY = 0;
let fourX = 0;
let startDelay = 0;
let kills = 0;






// function updateHealth(){
//     //if enemy is alive for 3 seconds player health goes down by 1
//     let player = '';
//     if(enemyOne.alive === 3000 ){
//         hp.textContet = player -1;
//     } else {
//         player.hp = hp
//     }
// }



    //if player health points = 0 end game make game stop 

    //if playe reachers score of 15 kills end game  


//Crawler Constructor function
class Crawler{
    constructor(x, y, width, height, color, type){
        //our contructor needs x y width height color speed and type 
    this.type = type;
    // if(type == 'image'){
        this.image = new Image();
        this.image.src = this.type;
        console.log(this.image)
    // }
    //check if this.type = image
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.alive = true;
    this.render = function(){
        if(this.type.includes('assets')){
            // console.log('we here')
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        // if(this.image.src){
        //     ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        // } else {
            // ctx.fillStyle = this.type;
            // ctx.fillRect(this.x, this.y, this.width, this.height)
            
        // }
        }

    this.update = function(){
        ctx = canvas.getContext('2d');
        console.log(this.type)
        if(this.type.includes('assets')){
            // console.log('we here')
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
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
                // console.log(enemyOne.x)
                // console.log(enemyOne.y)
          } else if (oneY == -200 && oneX == -200){
              oneY = 0;
              oneX = 0;
            //   console.log(enemyOne.x)
            //   console.log(enemyOne.y)
          }
          //starting point for sqaure
          ctx.clearRect(0, 0, canvas.width, canvas.height);
       
       
        enemyOne.render()
       
          
        }  

        if(enemyTwo.alive){
            enemyTwo.render()
            if(twoY < 15 && twoX > -20){
                twoY += 1;
                twoX += 1;
                
                enemyTwo.y -= 20
                // console.log(enemyTwo.x)
                // console.log(enemyTwo.y)
          } else if (twoY == -200 && twoX == -200){
              twoY = 0;
              twoX = 0;
            //   console.log(enemyTwo.x)
            //   console.log(enemyTwo.y)
          }
          //starting point for sqaure
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        
      
        enemyTwo.render()
        }
        if(enemyThree.alive){
          enemyThree.render()

          if(threeY < 15 && threeX > -20){
            threeY += 1;
            threeX += 1;
            
            enemyThree.x += 5
          
      } else if (threeY == -200 && threeX == -200){
          threeY = 0;
          threeX = 0;
          
      }
      //starting point for sqaure
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   
  
    enemyThree.render()
         

      }
      if(enemyFour.alive){
          enemyFour.render()


          if(fourY < 15 && fourX > -20){
            fourY += 1;
            fourX += 1;
            
            enemyFour.x -= 20
          
      } else if (fourY == -200 && fourX == -200){
          fourY = 0;
          fourX = 0;
          
      }
      //starting point for sqaure
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    
    enemyFour.render()
      }

}

document.getElementById('gunload').play();
const gameLoop = () =>{
    
    
    document.getElementById('bgm').play();

    // clearing the canvas game area back to zero
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //TODO make movement display with mouse
    // movementDisplay.textContent = `X:${mainHero.x}\nY:${mainHero.this..y} `;
    //show the enemyOne if ogre is alive
    
    if(startDelay === 0){
        setTimeout(function(){
            renderEnemies();
            startDelay = 5
        }, 3000)
    } else {
        renderEnemies();
    }
    detectWin();
}

// hit detector 
function isIntersect(x, y,  enemy){
    if (x >= enemy.x && x < enemy.x+enemy.width && 
        y >= enemy.y && y < enemy.y+enemy.height) {
        // console.log('you clicked enemy ' + enemy.color)
       
        // document.getElementById('kills').innerHTML = 'Kills:' + kills;
        document.getElementById('kills').innerText = 'kills: ' + kills;
        return true;
    
        }
        return false;
}
  
function killsound(){
    if(kills === 1){
        document.getElementById('fun').play()
        document.getElementById('gunload').play();
    }
    if(kills === 2){
        document.getElementById('laughOne').play()
    }
    if(kills === 3){
        document.getElementById('bag').play()
    }
    if(kills === 5){
        document.getElementById('gunload').play();
        document.getElementById('mega').play()
    }
    if(kills === 7){
        document.getElementById('stolebag').play()
    }
    if(kills === 9){
        document.getElementById('godlike').play()
        
    }
    if(kills === 10){
        document.getElementById('gunload').play();
        document.getElementById('lowlaugh').play()
    }
    if(kills ===12){
        document.getElementById('holy').play()
    }
    if(kills ===15){
        document.getElementById('gunload').play();
        document.getElementById('ultra').play()
    }
    if(kills === 19){
       document.getElementById('rampage').play()
    }
    if(kills === 20){
        document.getElementById('gunload').play();
     }
     if(kills === 21){
         document.getElementById('murder').play()
     }
    if(kills === 23){
      document.getElementById('mine').play()
    }
}

function detectWin(){
    console.log('detect win!')
    if(kills === 26){
        endGame();
    }
}

function endGame(){
      clearInterval(runGame);
      clearTimeout(time);
      document.getElementById('bgm').pause();
      document.getElementById('win').play()
      document.getElementById('victory').play()
      let winText = document.getElementById('drawing')
      winText.textContent = 'YOU WIN!'
        
        
    }
    
//update score because if reach 15 game ends. 
    //i have hit detector that shows the enemy dies.
    //winGame is called when reach 15 kills

   
   //endGame runs when player hp is 0
//    function healthPoints(){
    //    if enemy stays out longer than 5 seconds 
    // healthpoints -1 intill zero endgame?
    // 

//    }


   //function to add game score once it hits 15 make a stop game win
   
    


   
   let runGame = setInterval(gameLoop, 60);
        
   let time;

        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('bgm').play(); 
        //link the movementDisplay
        
       
        movementDisplay = document.getElementById('movement');
        console.log('movement linked')
        
         //our contructor needs x y width height color and type
        //crawler takes in(x, y, width, height, color)
        
        enemyOne = new Crawler(375, -100, 200, 140,'orange', 'assets/sniperwolffront.png');
        console.log(enemyOne)
        enemyTwo = new Crawler(275, 600, 300, 300, 'green', 'assets/sniperfrontview.png');
        enemyThree = new Crawler(-120, 300, 250, 150, 'red', 'assets/sniper15.png');
        enemyFour = new Crawler(800, 260, 150, 200, 'purple', 'assets/sniperright.png');
        
        canvas.addEventListener('mousedown', function (e){
            document.getElementById('shotsound').play()
       


            //shows clientx and client y click coordiantes
            // console.log(e.offsetX);
            // console.log(e.offsetY);
            // console.log('click: ' + e.offsetX + '\ ' + e.offsetY ) 
            let mouseX = e.clientX ;
            console.log('mouseX position: ', mouseX);
            let mouseY = e.clientY ; 
           
            // console.log('mouseY position: ', mouseY);
            // console.log('enemyX: ', enemyOne.x);
            // console.log('enemyY: ', enemyOne.y);
            // console.log('enemy width: ', enemyOne.width);
            // console.log('enemy height: ', enemyOne.height);

            // forumla for hit detection with mouse
            // y position starts up lower and ends down higher from top to bottom
            // x gets starts lower from left and goes bigger to right
            //TODO refactor to make enemies an array
           if(isIntersect(e.offsetX, e.offsetY, enemyOne)){
               console.log('you hit enemyOne');
               enemyOne.alive = false;
               document.getElementById('foo').play()
               kills++;
               killsound()
               if(kills == 26){
                console.log('yur win');
                endGame();
               }
            
              console.log(kills);
              time = setTimeout(function(){
                enemyOne.alive = true; 
                console.log('SET TIME OUT WORKS')
                //make X and Y random to pop up in different places
                oneY = 0;
                oneX = 0;
                enemyOne.y = -100;
                renderEnemies()
               }, 5000)
               //math.random
               //how to set time interval and respawn enemy back with 
               //funciton in here?
            }

           if(isIntersect(e.offsetX, e.offsetY, enemyTwo)){
               console.log('you hit enemyTwo');
               enemyTwo.alive = false;
               document.getElementById('foo').play()
               kills++
               killsound()
              console.log(kills)
               time = setTimeout(function(){
                enemyTwo.alive = true
                twoY = 0
                twoX = 0
                enemyTwo.y = 600
                renderEnemies()
               }, 5000)
            }

           if(isIntersect(e.offsetX, e.offsetY, enemyThree)){
               console.log('you hit enemyThree');
               enemyThree.alive = false;
               document.getElementById('foo').play()
               kills++
               killsound()
               console.log(kills)
               time = setTimeout(function(){
                enemyThree.alive = true
                threeY = 0
                threeX = 0
                enemyThree.x = 0
                renderEnemies()
               }, 5000)
                
           }

           if(isIntersect(e.offsetX, e.offsetY, enemyFour)){    
               console.log('you hit enemyFour');
               enemyFour.alive = false;
               document.getElementById('foo').play()
               kills++
               killsound()
               console.log(kills)
               time = setTimeout(function(){
                enemyFour.alive = true
               }, 5000)
              
            }
    })
            
    
   
    

})


