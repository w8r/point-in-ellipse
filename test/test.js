var tape   = require('tape');
var inside = require('../');

tape('point in ellipse', function (t) {
  var c = [1281, 412];
  var r = [160.125, 412];
  var tilt = 45 * (Math.PI / 180);

  t.ok(inside(c, c, r[0], r[1], tilt), 'in');
  t.ok(inside([1256, 412], c, r[0], r[1], tilt), 'in');
  t.ok(inside([1562, 116], c, r[0], r[1], tilt), 'in');
  t.ok(inside([1048, 698], c, r[0], r[1], tilt), 'in');
  t.notOk(inside([1112, 220], c, r[0], r[1], tilt), 'out');
  t.notOk(inside([1000, 220], c, r[0], r[1], tilt), 'out');
  t.notOk(inside([1400, 570], c, r[0], r[1], tilt), 'out');

  t.end();
});
