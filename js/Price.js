/** Prices our player could obtain
  * @subclass Price
  * @constructor
  * @extends Obstacle superclass
  */
function Price (defaults) {

/**If no argument is passed, default to an empty object literal
  *If the defaults object contains a named property, set the property of the
  * same name in the object instance to the supplied value, otherwise resort to a default
  * "Defaults" solution is implemented following Den Odell's book: Pro JavaScript Development
  *     pages 10-11.
  */
    defaults = defaults || {};

/** Creates a "gem" price
  * @property {number} x positon of the object
  * @property {number} y positon of the object
  * @property {number} speed, of the object
  * @property {number} row, object's location related to the "stone" rows
  * @property {number} priceValue to be accumulated for the player
  * @property {string} identity of object's instance
  * @property {url} url of the image used
  */    
    this.x= defaults.x ||100;
    this.y= defaults.y|| 149;
    this.speed= defaults.speed || 0;
    this.row= defaults.row ||2;
    this.priceValue= defaults.priceValue||40;
    this.identity= defaults.identity || "gem";
    this.sprite = 'images/GemBlue.png';
   
}

/** Sets Price as a subclass of Obstacle superclass, for inherit all its methods
  * Sets the subclass constructor property pointing to the constructor function
  *     that created it
  */
Price.prototype=new Obstacle();
Price.constructor= Price;

