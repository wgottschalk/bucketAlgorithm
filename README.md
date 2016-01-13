<big><h1 align="center">The Water Bucket Algorithm</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/bucket">
    <img src="https://img.shields.io/npm/v/bucket.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/wgottschalk/bucket">
    <img src="https://img.shields.io/coveralls/wgottschalk/bucket.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/wgottschalk/bucket">
    <img src="https://img.shields.io/travis/wgottschalk/bucket.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/bucket">
    <img src="http://img.shields.io/npm/dm/bucket.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/wgottschalk/bucket.svg">
    <img src="https://david-dm.org/wgottschalk/bucket.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/wgottschalk/bucket/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/bucket.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p>
 "You are standing in front of a lake with a 3 gallon bucket and a 5 gallon bucket, what is the minimum number of steps need to reach 4 gallons if at all possible?"
</p>
<p>
"Now abstract that into a function for two buckets of any size and any target value between 1 and the largest bucket size"
</p>
<p>
Here is an implementation of that algorithm
</p>

## Install

```sh
npm install water-bucket-algorithm
```

## Usage

```js
import bucketAlgorithm from "bucket"

// bucket(bucketSize1, bucketSize2, target)

bucketAlgorithm(3,5,4) // -> 6
bucketAlgorithm(2,8,1) // -> "Not Possible"
```

## License

MIT © [William Gottschalk](http://github.com/wgottschalk)

[npm-url]: https://npmjs.org/package/bucket
[npm-image]: https://img.shields.io/npm/v/bucket.svg?style=flat-square

[travis-url]: https://travis-ci.org/wgottschalk/bucket
[travis-image]: https://img.shields.io/travis/wgottschalk/bucket.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/wgottschalk/bucket
[coveralls-image]: https://img.shields.io/coveralls/wgottschalk/bucket.svg?style=flat-square

[depstat-url]: https://david-dm.org/wgottschalk/bucket
[depstat-image]: https://david-dm.org/wgottschalk/bucket.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/bucket.svg?style=flat-square
