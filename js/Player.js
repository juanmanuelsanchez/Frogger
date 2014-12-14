
/** Player who must avoid enemies, eventually obtain prices and jump into the water
  * @class Player
  * @constructor
  */
var Player= function() {
    /** Creates a player 
  * @property {number} x  rigth limit positon of the object
  * @property {number} x left limit positon of the object
  * @property {number} y bottom limit positon of the object
  * @property {number} y top limit positon of the object
  * @property {number} x positon of the object
  * @property {number} y positon of the object
  * @property {number} ax speed on x positon of the object
  * @property {number} ay speed on y positon of the object
  * @property {number} row, object's location relative to the "stoned" rows
  * @property {url} url of the image used
  */   
    var limitRightX=Player.prototype;
    var limitLeftX= Player.prototype;
    var limitBottomY= Player.prototype;
    var limitTopY= Player.prototype;
    this.x= 200;
    this.y= 400;
    this.ax=0;
    this.ay=0;
    this.row=null;
    this.sprite = 'images/char-boy.png';

}


/** Updates the player position between the stage limits
  * @method update. Calls the checkPositionPlayer function, requiered for check collisions
  *    between objects
  */
Player.prototype.update = function() {

    limitRightX=425;
    limitLeftX= -21;
    limitBottomY=437;
    limitTopY=0;
    checkPositionPlayer();
   
   if(this.x>=limitRightX || this.x<= limitLeftX){
    this.ax=-this.ax;
   } 
   if(this.y>=limitBottomY){
    this.ay= -this.ay;
    this.y-=1;
   }
    if(this.y<= limitTopY){

        this.ay= -this.ay;
        this.y+=1;
    }else{
    this.x +=this.ax;
    this.y +=this.ay;
   }
  
   
}

/** Draws the player on the screen, required method for game
  * @method render
  */
Player.prototype.render = function() {



    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


/** Handles the user keydown inputs to move the player across the stage
  * @method handleInputDown
  * @param {key number | string} key
  */
Player.prototype.handleInputDown= function(key){

     if (key ==='left') {

     	 this.ax= -0.8;
     }else if (key==='right') {

     	 this.ax= 0.8;
     }

      if (key ==='up') {

     	 this.ay= -0.8;
     }else if (key ==='down') {

     	 this.ay= 0.8;
     }

}

/** Handles the user keyup inputs to stop moving the player across the stage
  * @method handleInputUp
  * @param {event} keyup event
  */
Player.prototype.handleInputUp= function(e){

       this.ax=0;
       this.ay=0;
}

/** Defines the game over and restart of the player
  * @method gameOver
  */
Player.prototype.gameOver= function(){

       this.x=200;
       this.y=400;
       this.row=null;
}

/** These listen for key presses and sends the keys to the
  * Player.handleInputDown() and Player.handleInputUp methods. 
  * @event keydown
  * @event keyup
  */

document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInputDown(allowedKeys[e.keyCode]);
});

document.addEventListener('keyup', function(e) {

    player.handleInputUp(e);

});


       
