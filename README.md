<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Online Regression

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Online regression via [Stochastic Gradient Descent][stochastic-gradient-descent].



<section class="usage">

## Usage

```javascript
import incrSGDRegression from 'https://cdn.jsdelivr.net/gh/stdlib-js/ml-incr-sgd-regression@esm/index.mjs';
```

#### incrSGDRegression( \[options] )

Creates an online linear regression model fitted via [stochastic gradient descent][stochastic-gradient-descent]. The module performs [L2 regularization][l2-regularization] of the model coefficients, shrinking them towards zero by penalizing the squared [euclidean norm][euclidean-norm] of the coefficients.

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import normal from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@esm/index.mjs';
var accumulator = incrSGDRegression();

var x1;
var x2;
var i;
var y;

// Update model as data comes in...
for ( i = 0; i < 100000; i++ ) {
    x1 = randu();
    x2 = randu();
    y = (3.0 * x1) + (-3.0 * x2) + 2.0 + normal( 0.0, 1.0 );
    accumulator( [ x1, x2 ], y );
}
```

The function accepts the following `options`:

-   **learningRate**: `string` denoting the learning rate to use. Can be `constant`, `pegasos` or `basic`. Default: `basic`.
-   **loss**: `string` denoting the loss function to use. Can be `squaredError`, `epsilonInsensitive` or `huber`. Default: `squaredError`.
-   **epsilon**: insensitivity parameter. Default: `0.1`.
-   **lambda**: regularization parameter. Default: `1e-3`.
-   **eta0**: constant learning rate. Default: `0.02`.
-   **intercept**: `boolean` indicating whether to include an intercept. Default: `true`.

<!-- run-disable -->

```javascript
var accumulator = incrSGDRegression({
    'loss': 'squaredError',
    'lambda': 1e-4
});
```

The `learningRate` decides how fast or slow the weights will be updated towards the optimal weights. Let `i` denote the current iteration of the algorithm (i.e. the number of data points having arrived). The possible learning rates are:

|      Option     |        Definition       |
| :-------------: | :---------------------: |
| basic (default) | 1000.0 / ( i + 1000.0 ) |
|     constant    |           eta0          |
|     pegasos     |  1.0 / ( lambda \* i )  |

The used loss function is specified via the `loss` option. The available options are:

-   **epsilonInsensitive**: Penalty is the absolute value of the error whenever the absolute error exceeds epsilon and zero otherwise.
-   **huber**: Squared-error loss for observations with error smaller than epsilon in magnitude, linear loss otherwise. Should be used in order to decrease the influence of outliers on the model fit.
-   **squaredError**: Squared error loss, i.e. the squared difference of the observed and fitted values.

The `lambda` parameter determines the amount of shrinkage inflicted on the model coefficients:

```javascript
var createRandom = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu' ).factory;

var accumulator;
var coefs;
var opts;
var rand;
var x1;
var x2;
var i;
var y;

opts = {
    'seed': 23
};
rand = createRandom( opts );

accumulator = incrSGDRegression({
    'lambda': 1e-5
});

for ( i = 0; i < 100; i++ ) {
    x1 = rand();
    x2 = rand();
    y = (3.0 * x1) + (-3.0 * x2) + 2.0;
    accumulator( [ x1, x2 ], y );
}

coefs = accumulator.coefs;
// returns [ ~3.007, ~-3.002, ~2 ]

rand = createRandom( opts );
accumulator = incrSGDRegression({
    'lambda': 1e-2
});

for ( i = 0; i < 100; i++ ) {
    x1 = rand();
    x2 = rand();
    y = (3.0 * x1) + (-3.0 * x2) + 2.0;
    accumulator( [ x1, x2 ], y );
}

coefs = accumulator.coefs;
// returns [ ~2.893, ~-2.409, ~1.871 ]
```

Higher values of `lambda` reduce the variance of the model coefficient estimates at the expense of introducing bias.

By default, the model contains an `intercept` term. To omit the `intercept`, set the corresponding option to `false`:

```javascript
var accumulator = incrSGDRegression({
    'intercept': false
});
accumulator( [ 1.4, 0.5 ], 2.0 );

var dim = accumulator.coefs.length;
// returns 2

accumulator = incrSGDRegression();
accumulator( [ 1.4, 0.5 ], 2.0 );

dim = accumulator.coefs.length;
// returns 3
```

If `intercept` is `true`, an element equal to one is implicitly added to each `x` vector. Hence, this module performs regularization of the intercept term.

#### accumulator( x, y )

Update the model coefficients in light of incoming data. `y` must be a numeric response value, `x` a `numeric array` of predictors. The number of predictors is decided upon first invocation of this method. All subsequent calls must supply `x` vectors of the same dimensionality.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
accumulator( [ 1.0, 0.0 ], 5.0 );
```

#### accumulator.predict( x )

Predict the response for a new feature vector `x`, where `x` must be a `numeric array` of predictors. Given feature vector `x = [x_0, x_1, ...]` and model coefficients `c = [c_0, c_1, ...]`, the prediction is equal to `x_0*c_0 + x_1*c_1 + ... + c_intercept`.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var yhat = accumulator.predict( [ 0.5, 2.0 ] );
// returns <number>
```

#### accumulator.coefs

Getter for the model coefficients / feature weights stored in an `array`. The coefficients are ordered as `[c_0, c_1,..., c_intercept]`, where `c_0` corresponds to the first feature in `x` and so on.

<!-- run-disable -->

<!-- eslint-disable stdlib/doctest -->

```javascript
var coefs = accumulator.coefs;
// returns <Array>
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Stochastic gradient descent is sensitive to the scaling of the features. One is best advised to either scale each attribute to `[0,1]` or `[-1,1]` or to transform them into z-scores with zero mean and unit variance. One should keep in mind that the same scaling has to be applied to test vectors in order to obtain accurate predictions.
-   Since this module performs regularization of the intercept term, scaling the response variable to an appropriate scale is also highly recommended.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import normal from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@esm/index.mjs';
import incrSGDRegression from 'https://cdn.jsdelivr.net/gh/stdlib-js/ml-incr-sgd-regression@esm/index.mjs';

var accumulator;
var rnorm;
var x1;
var x2;
var y;
var i;

rnorm = normal.factory( 0.0, 1.0 );

// Create model:
accumulator = incrSGDRegression({
    'lambda': 1e-7,
    'loss': 'squaredError',
    'intercept': true
});

// Update model as data comes in...
for ( i = 0; i < 10000; i++ ) {
    x1 = randu();
    x2 = randu();
    y = (3.0 * x1) + (-3.0 * x2) + 2.0 + rnorm();
    accumulator( [ x1, x2 ], y );
}

// Extract model coefficients:
console.log( accumulator.coefs );

// Predict new observations:
console.log( 'y_hat = %d; x1 = %d; x2 = %d', accumulator.predict( [0.9, 0.1] ), 0.9, 0.1 );
console.log( 'y_hat = %d; x1 = %d; x2 = %d', accumulator.predict( [0.1, 0.9] ), 0.1, 0.9 );
console.log( 'y_hat = %d; x1 = %d; x2 = %d', accumulator.predict( [0.9, 0.9] ), 0.9, 0.9 );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ml/incr/binary-classification`][@stdlib/ml/incr/binary-classification]</span><span class="delimiter">: </span><span class="description">incrementally perform binary classification using stochastic gradient descent (SGD).</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ml-incr-sgd-regression.svg
[npm-url]: https://npmjs.org/package/@stdlib/ml-incr-sgd-regression

[test-image]: https://github.com/stdlib-js/ml-incr-sgd-regression/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ml-incr-sgd-regression/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ml-incr-sgd-regression/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ml-incr-sgd-regression?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ml-incr-sgd-regression.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ml-incr-sgd-regression/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ml-incr-sgd-regression/tree/deno
[umd-url]: https://github.com/stdlib-js/ml-incr-sgd-regression/tree/umd
[esm-url]: https://github.com/stdlib-js/ml-incr-sgd-regression/tree/esm
[branches-url]: https://github.com/stdlib-js/ml-incr-sgd-regression/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ml-incr-sgd-regression/main/LICENSE

[euclidean-norm]: https://en.wikipedia.org/wiki/Norm_(mathematics)#Euclidean_norm

[l2-regularization]: https://en.wikipedia.org/wiki/Tikhonov_regularization

[stochastic-gradient-descent]: https://en.wikipedia.org/wiki/Stochastic_gradient_descent

<!-- <related-links> -->

[@stdlib/ml/incr/binary-classification]: https://github.com/stdlib-js/ml-incr-binary-classification/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
