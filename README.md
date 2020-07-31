# canvas-shooter-game
This is my canvas-shooter-game project due week 3.

# Shooter McSniper
This game is a straight 90s arcade style shooter, where an enemy randomly shows up on the screen and the player must react quick enough to shoot the target before they fire back. 

- Here is my Link to the game hosted on Github.com 
https://chamon562.github.io/canvas-shooter-game/

## Licensing
I do not own the copyright to any of the music, audio, images in this game. All rights go to the makers of highly played Dota 2. 

## Code Snippets and Comments 
1. start by making a game canvas, so I have something to work on. Have to get grab the element by id that we called our canvas which was game area. then set the size of through height and width.
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

5. Replacing my enemy boxes with images I downloaded and cut out on gimp was the goal. Had to add in this.image and make sure that my code was locating the folder assets to get my image. This process took a long time because I at first was using the type attribute to = image. Then later found its actually equalling the word image and not the actual image file. So had to be more clear in expressing the right object. Then to test it to test it out and find out if it was working. console log the crawler I had it placed in to see if the url image showed. It took a lot of tries but manage to rename the file correctly as assets as the main folder then threw all my images is in there. Had to re export all the images in gimp as png files just to be on the safe side and remove any spaces for the name of the image files and it worked having it in the right attribute of my crawler.
```Js
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
        }


        //further down my code i have my crawlers

        enemyOne = new Crawler(375, -100, 200, 140,'orange', 'assets/sniperwolffront.png');
        console.log(enemyOne)
        enemyTwo = new Crawler(275, 600, 300, 300, 'green', 'assets/sniperfrontview.png');
        enemyThree = new Crawler(-120, 300, 250, 150, 'red', 'assets/sniper15.png');
        enemyFour = new Crawler(800, 350, 80, 100, 'purple', 'assets/sniperslidingfromright.png');

```



5. I ceated a hit counter for my game to determine the winner once it reachers 25 kills. I had to go back to old projects to remember how to come about starting it. I did some psuedo coding and wrote down what ideas to put together. I knew that the counter involved detecting a hit. Also I knew my enemies registered as dead targets because of my boolean .alive = false variable I made and I conole.log to see if it registerd. Even though this may sound basic to others. This took a long time for me because I realized how much I over thought from comparing what I thought I should be doing when seeing other people. Rather than take a step back and saw it was as simple as making a variable called kill and adding ++ to it because I had a hit detector register and just added to that. 

```Js
 if(isIntersect(e.offsetX, e.offsetY, enemyTwo)){
               console.log('you hit enemyTwo');
               enemyTwo.alive = false;
               document.getElementById('foo').play()
               kills++
               killsound()
```

6. I wanted to make an enemy attack after set aount of time and make the player lose health, but I already felt drained from this entire process. So I did what i could.

7. Once I found a way to add background music it brought life back into me. The process of going through this project felt more accumulated than the last. But I made the best of it. I downloaded alot of mp3s and saw that implimenting the audio was straight forward by creating an id in my html and then grabbing the id in javascript to end with .play() This was my more enjoyable process because sound gave my game life.

```Js
function killsound(){
    if(kills === 1){
        document.getElementById('fun').play()
        document.getElementById('gunload').play();
    }
}
``` 
 8. I wanted to make an info screen on how to play and figure that to save space was to make a button and once I push that button, have a screen pop up and everything I needed to say was in there. This was confusing to me so after help and alot of tabs of googling I managed to put it together. I put it in a seperate js file called modal because my existing app.js was already messy. I apoligize, because I just wanted it to work. 
```js
console.log('Modal is connected')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>{
        // button.dataset allows access all data attributes as if theyre javascript objects
        //and it will camelCase them too
        //get data attribute from html grabbing #modal from html
        const modal = document.querySelector(button.dataset.modalTarget)
        //call function openModal and passs modal into that function
        openModal(modal)
    })
})
```

9. This is my last moment win announcement I made. I created a h1 and gave an id. Then inside my Game win functino I grabElementById of the id of h1 called 'announce' and put a simple words in You win!
```Js
 let winText = document.getElementById('announce')
      winText.innerHTML = 'YOU WIN!'
```
## Sounds I learned how to make work

Here is an example of me looking up how to put in a sound. HTML has an audio tag that I gave an id and sorce to put. Whenever I wanted to use it. I use the getElementById method and the main thing was it needed to play in a function somewhere from what I experienced. I couldnt throw it anywhere I wanted because an error would people saying it wasnt being used.

```Html
<audio  id="foo" src="sounds/sniperducsoundhit.mp3"></audio>
        <audio id="shotsound" src="sounds/snipergunhit.mp3"></audio>

```

## Conclusion

I wanted to quit. I really did, part of it was seeing how others understood everything so well and I didnt. I showed up to TA hours and asked for so much help and still felt like I kinda of understood how things worked, but quickly forgot. I am forever greatfull to have made it this far. Then, after taking a break. I did some reflecting. I invested so much into this and I could hear this famouse speaker in my head by the name of Eric Thomas say, "dont cry to quit, cry to keep going. You alreay in pain, get a reward from it!" Then I think about my family who I gotta take care of. So I cant let them down and one thing for, I ant for sure ant going back to shit I used to do. Gotta stay elevated and keep moving. I know Im not that smart and I dont understand much or dont catch on as well, I just know Im not going anywhere and Im not qutting. Gona ride this till the wheels fall off and see where it goes. Still here for a reason, finna find out.

## Special Thanks
I just want to thank the kindness of these people who have helped me come out my shell and feel like its ok to be myself. 

Special thanks to Lemon Garrett for, super great heart and always fun to be around. Snaligators Yeet!

Special thanks to Sarah The Queen, she came through in the quickness and got me on track again. 

Special thanks to Big Mac Jankowski! Always a great soul to be around for anything.

Special thanks to Connie Lancaster for her patience with me and staying the long hours to help me get through whatever it is I needed to understand. 

Special Thanks to my guy Big Rome Bell, his wisdom and guidance has helped me see my self worth. Its good to connect with people who have gone through things like you, because when your in a foreign place and get home sick or feel out of it. It brings keeps you grounded again. 

Special Thanks to Taylor Darneille, when I scared to reach out helped comfort me in to getting help from TA's and solid talks to get on track.

Special Thanks to my Pod Gang Lizz who helped talk me into reaching out when I felt left behind and the homie Levin for understanding my situation and motivating me to stay in it and not quit. Im suprised to run into people who make me feel genuine. 

Special Thanks to Yoel Morad, always has a good vibe to him and very hard worker who wants to see his peers succeed. Thanks for the motivation brody. Lets keep it movin. 

Special Thanks to Adam and pete for their great vibes.