# Point in ellipse ([Demo](https://w8r.github.io/point-in-ellipse/example/)) [![npm version](https://badge.fury.io/js/point-in-ellipse.svg)](https://badge.fury.io/js/point-in-ellipse) [![CircleCI](https://circleci.com/gh/w8r/point-in-ellipse.svg?style=shield)](https://circleci.com/gh/w8r/point-in-ellipse)

Determine if the point is inside of the ellipse or out, based on ellipse equation.

# Example

```js
var inside = require('point-in-ellipse');

var c  = [100, 100];
var rx = 100, ry = 200;
var rotation = 45 * (Math.PI / 180); // rotation in radians

inside([150, 150], c, rx, ry, rotation);
// true

```

# API

```js
pointInEllipse([px, py], [cx, cy], rx, ry, rotation = 0);
```

# Usage

**CommonJS/Node**
```
npm install -S point-in-ellipse;
...
var inside = require('point-in-ellipse');
```

**Browser**
Simply include the `index.js` file to your project, it will expose global function `pointInEllipse`;

# License

MIT License

Copyright (c) 2016 Alexander Milevski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
