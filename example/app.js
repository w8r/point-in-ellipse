if (!CanvasRenderingContext2D.prototype.ellipse) {
  /**
   * Canvas2D ellipse polyfill
   * @param  {Number} x
   * @param  {Number} y
   * @param  {Number} radiusX
   * @param  {Number} radiusY
   * @param  {Number} rotation Radians
   * @param  {Number} startAngle Degrees
   * @param  {Number} endAngle Degrees
   * @param  {Boolean} antiClockwise
   */
  CanvasRenderingContext2D.prototype.ellipse = function(x, y, radiusX, radiusY,
        rotation, startAngle, endAngle, antiClockwise) {
    this.save();
    this.translate(x, y);
    this.rotate(rotation);
    this.scale(radiusX, radiusY);
    this.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    this.restore();
  }
}

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var k = window.devicePixelRatio || 1;
var w = canvas.offsetWidth;
var h = canvas.offsetHeight;

canvas.width  = w * k;
canvas.height = h * k;
canvas.style.width  = w + 'px';
canvas.style.height = h + 'px';

canvas.addEventListener('mousemove', render, false);

var DEG_TO_RAD = Math.PI / 180;

function render(evt) {
  var mouseX = evt.clientX * k;
  var mouseY = evt.clientY * k;

  var W = w * k, H = h * k;

  var c = [W / 2, H / 2];
  var r = [(W / 2) / 8, (H / 2)];
  var tilt = 45 * DEG_TO_RAD;

  ctx.clearRect(0, 0, W, H);

  var inside = pointInEllipse(mouseX, mouseY, c[0], c[1], r[0], r[1], tilt);

  canvas.style.cursor = inside ? 'pointer' : 'default';

  ctx.globalAlpha = 0.7;
  ctx.fillStyle   = inside ? '#FF0000' : '#96abcc';
  ctx.lineWidth   = 3;
  ctx.strokeStyle = '#333333';

  ctx.beginPath();
  ctx.ellipse(c[0], c[1], r[0], r[1], tilt, 0, Math.PI * 2, false);
  ctx.closePath();

  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
	ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2, false);
  ctx.closePath();

  ctx.fillStyle   = '#8ED6FF';
  ctx.lineWidth   = 5;
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.fill();
}
