const tape   = require('tape');
const inside = require('../');

tape('point in ellipse', (t) => {
  const c = [1281, 412];
  const r = [160.125, 412];
  const tilt = 45 * (Math.PI / 180);

  t.ok(inside(c[0], c[1], c[0], c[1], r[0], r[1], tilt), 'in');
  t.ok(inside(1256, 412, c[0], c[1], r[0], r[1], tilt), 'in');
  t.ok(inside(1562, 116, c[0], c[1], r[0], r[1], tilt), 'in');
  t.ok(inside(1048, 698, c[0], c[1], r[0], r[1], tilt), 'in');
  t.notOk(inside(1112, 220, c[0], c[1], r[0], r[1], tilt), 'out');
  t.notOk(inside(1000, 220, c[0], c[1], r[0], r[1], tilt), 'out');
  t.notOk(inside(1400, 570, c[0], c[1], r[0], r[1], tilt), 'out');

  t.end();
});
