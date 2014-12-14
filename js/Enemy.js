

/** Enemies our player must avoid
  * @subclass Enemy
  * @constructor
  * @extends Obstacle superclass
  */
function Enemy (defaults) {

/** If no argument is passed, default to an empty object literal
  * If the defaults object contains a named property, set the property of the
  * same name in the object instance to the supplied value, otherwise resort to a default
  * "Defaults" solution is implemented following Den Odell's book: Pro JavaScript Development
  *     pages 10-11.
  */
    defaults = defaults || {};

/** Creates an enemy
  * @property {number} x positon of the object
  * @property {number} y positon of the object
  * @property {number} speed, of the object
  * @property {number} row, object's location related to the "stone" rows
  * @property {string} identity of object's instance
  * @property {url} url of the image used
  */    
    this.x= defaults.x ||0;
    this.y= defaults.y|| 65;
    this.speed= defaults.speed || 20;
    this.row= defaults.row ||1;
    this.identity="enemy";
    this.sprite = 'images/enemy-bug.png';
   
}

/** Sets Enemy as a subclass of Obstacle superclass, for inherit all its methods
  * Sets the subclass constructor property pointing to the constructor function
  *     that created it
  */
Enemy.prototype=new Obstacle();
Enemy.constructor= Enemy;

