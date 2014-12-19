/** Superclass of obstacles of the game
  * @class Obstacle
  * @constructor
  */
var Obstacle = function() {}


/** Updates the obstacle's position, required method for game. 
  * @method update
  * @param {number} dt, a time delta between ticks to ensure smooth animations
  * 
  */
Obstacle.prototype.update = function(dt) {

  this.x  += (this.speed)* Math.random()*4*dt;

  if(this.x>canvas.width){
        
    var loc= [-120, -150, -102, -170]; 
        
/** Randomizes loc array to start at different positions each time
  */
        loc.sort(utils.randOrd); 
        //console.log(loc[0]);
        this.x= loc[0];

   }

    checkPositionObstacle();
   
 }


/** Renders the obstacle's position, required method for game. 
  */

Obstacle.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}


