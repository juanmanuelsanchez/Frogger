
/** Variables needed for the game:
  */
var allObstacles=[],
    posPlayerX=null,
    posPlayerY=null,
    posEnemyX1=null,
    posEnemyY1=null,
    characterRight=null,
    characterLeft=null,
    characterBottom=null,
    characterTop=null,
    obstacleRight=null,
    obstacleLeft=null,
    obstacleBottom=null,
    obstacleTop=null,
    numberRow=null,
    identity=null,
    identityArray=null,
    proofArray=[],
    numberRowPlayer=null,
    endSound= new Audio("sounds/Game-Death.ogg"),
    damageSound= new Audio("sounds/S-Damage.ogg"),
    priceSound= new Audio("sounds/R-Damage.ogg");


 /** player instance of @Player class
   *
   * enemy instances of @Enemy subclass, extends @Obstacle superclass
   * @param {number} x, starting x positon of the instance
   * @param {number} y, starting y position of the instance
   * @param {number} speed, of the instance
   * @param {number} location related to the "stone" rows
   *
   * @price instance of @Price subclass, extends @Obstacle superclass
   * @param {number} priceValue for eventually provide a score
   * @param {string} identity of the price instance
   */
 var player= new Player();

 var enemy1= new Enemy({
       x:-150,
       y: 65,
       speed: 25,
       row: 1
     }),
     enemy2= new Enemy({
      
       x:-120,
       y: 149,
       speed: 20,
       row: 2
     }),

     enemy3= new Enemy({
      
       x:-105,
       y: 233,
       speed: 25,
       row: 3
     }),

    price1= new Price ({

      priceValue:30,
      identity: "gemBlue"
    });

  allObstacles.push(enemy1, enemy2, enemy3, price1);

/** Initialize arrays containing the bounds for checking obstacle collisions 
  *     with as many elements as instances of the @Obstacle class
  *     
  */

  var  identityArray= [],
       numberRowArray= [],
       obstacleLeftArray=[],
       obstacleRightArray=[],
       obstacleTopArray=[],
       obstacleBottomArray=[];

 for (var j=0; j< allObstacles.length; j++) {

    var item= Math.ceil(Math.random()*110);
    identityArray.push(item);
    numberRowArray.push(item);
    obstacleLeftArray.push(item);
    obstacleRightArray.push(item);
    obstacleTopArray.push(item);
    obstacleBottomArray.push(item);
 }


/** Checks the position of the player and converts the x and y coordinates
  *    for evaluating its bounds relatively to its position on the screen
  *    and to the "stoned" rows
  */
var checkPositionPlayer= function(){

/** Character x and y position relatively to the screen
  */
 posPlayerX= player.x;
 posPlayerY= player.y;

/** Character position relatively to the "stoned" rows
  */
 numberRowPlayer=player.row;


  if(posPlayerY>=20 && posPlayerY<=100){

        numberRowPlayer=1;
        
      }

    if(posPlayerY>=101 && posPlayerY<=180){

        numberRowPlayer=2;
       
      }
    if(posPlayerY >= 181 && posPlayerY<= 260){

        numberRowPlayer=3;
        
      }
        
/** Character bounds relative to its position on the screen
  */
  characterLeft= posPlayerX+18;
  characterRight= posPlayerX + 84;
  characterTop= posPlayerY+7;
  characterBottom= posPlayerY + 80;

  }

/** Checks the position of the enemy instances for evaluating 
  *     its bounds relatively to its position on the screen
  */
 var checkPositionObstacle= function(){

  for(var i=0; i<allObstacles.length; i++) {
    
    
    numberRow= allObstacles[i].row;
    numberRowArray.unshift(numberRow);
    numberRowArray.pop();
    identity= allObstacles[i].identity;
    identityArray.unshift(identity);
    identityArray.pop();
    obstacleLeft= allObstacles[i].x+2; 
    obstacleLeftArray.unshift(obstacleLeft);
    obstacleLeftArray.pop();
    obstacleRight=allObstacles[i].x + 99;
    obstacleRightArray.unshift(obstacleRight);
    obstacleRightArray.pop();
    obstacleTop=allObstacles[i].y+10;//  
    obstacleTopArray.unshift(obstacleTop);
    obstacleTopArray.pop();
    obstacleBottom= allObstacles[i].y + 20;//  
    obstacleBottomArray.unshift(obstacleBottom);
    obstacleBottomArray.pop();

     }
   
  }


/** Checks the collisions of the player instance with water row and bugs. Sounds credits to
  * CreateJS via https://github.com/CreateJS/SoundJS/tree/master/_assets/audio
  */
 var ckeckCollisions= function(){ 

/** Fall into the water
  */
   if(posPlayerY<=0) {

     

     endSound.play();
     player.gameOver();
        
  }

/** Collisions with obstacles: enemies and price
  * When the player collides with an enemy the method gameOver is called through the instance
  * When the player collides with a price ("gemBlue" in this case) this price is removed from
  *    the allObstacles Array wich contains all the instances of @Obstacle superclass
  */
    for(var i=0; i<obstacleBottomArray.length; i++) {
      
      if (((characterTop > obstacleTopArray[i] && characterTop < obstacleBottomArray[i]) ||
   (characterBottom > obstacleTopArray[i] && characterTop < obstacleBottomArray[i])) && 
   ((characterLeft > obstacleLeftArray[i] && characterLeft < obstacleRightArray[i])||
	(characterRight > obstacleLeftArray[i] && characterLeft < obstacleRightArray[i])) 
   && (numberRowPlayer===numberRowArray[i]) &&(identityArray[i]==="enemy")) {  
 
  damageSound.play();
  player.gameOver();
     
        }

   if (((characterTop > obstacleTopArray[i] && characterTop < obstacleBottomArray[i]) ||
   (characterBottom > obstacleTopArray[i] && characterTop < obstacleBottomArray[i])) && 
   ((characterLeft > obstacleLeftArray[i] && characterLeft < obstacleRightArray[i])||
  (characterRight > obstacleLeftArray[i] && characterLeft < obstacleRightArray[i])) 
   && (numberRowPlayer===numberRowArray[i]) &&(identityArray[i]==="gemBlue")) {  
 
  priceSound.play();
  allObstacles.splice(allObstacles.indexOf(identityArray[i]),1);//removes the element that
                                                                //contains that identity
     
        }
    
     }
  
  
  }
  
   
	
  


