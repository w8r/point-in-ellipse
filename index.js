(function (factory) {
  if (typeof define === 'function' && define.amd) { // AMD
     define(factory);
   } else if (typeof module !== 'undefined') {      // CommonJS
     module.exports = factory();
   } else {                                         // browser globals
     window.pointInEllipse = factory();
   }
})(function () {

  /**
   * Determines if the point lies inside or outside of ellipse
   * @param  {Array.<Number>} point
   * @param  {Array.<Number>} c  ellipse center
   * @param  {Number}         rx X radius
   * @param  {Number}         ry Y radius
   * @param  {Number}         rotation Radians
   * @return {Boolean}
   */
  return function pointInEllipse (px, py, cx, cy, rx, ry, rotation) {
    rotation = rotation || 0;
    var cos = Math.cos(rotation),
        sin = Math.sin(rotation);
    var dx  = (px - cx),
        dy  = (py - cy);
    var tdx = cos * dx + sin * dy,
        tdy = sin * dx - cos * dy;

    return (tdx * tdx) / (rx * rx) + (tdy * tdy) / (ry * ry) <= 1;
  }
});
