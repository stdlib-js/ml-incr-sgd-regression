/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNonNegativeNumber = require( '@stdlib/assert-is-nonnegative-number' ).isPrimitive;
var isPositiveNumber = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isObject = require( '@stdlib/assert-is-plain-object' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {PositiveNumber} [options.epsilon] - insensitivity parameter
* @param {PositiveNumber} [options.eta0] - constant learning rate
* @param {PositiveNumber} [options.lambda] - regularization parameter
* @param {string} [options.learningRate] - the learning rate to use
* @param {string} [options.loss] -  the loss function to use
* @param {boolean} [options.intercept] - specifies whether an intercept should be included
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {};
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( '0h72V', options ) );
	}
	if ( hasOwnProp( options, 'epsilon' ) ) {
		opts.epsilon = options.epsilon;
		if ( !isPositiveNumber( opts.epsilon ) ) {
			return new TypeError( format( '0h74D', 'epsilon', opts.epsilon ) );
		}
	}
	if ( hasOwnProp( options, 'eta0' ) ) {
		opts.eta0 = options.eta0;
		if ( !isPositiveNumber( opts.eta0 ) ) {
			return new TypeError( format( '0h74D', 'eta0', opts.eta0 ) );
		}
	}
	if ( hasOwnProp( options, 'lambda' ) ) {
		opts.lambda = options.lambda;
		if ( !isNonNegativeNumber( opts.lambda ) ) {
			return new TypeError( format( '0h74k', 'lambda', opts.lambda ) );
		}
	}
	if ( hasOwnProp( options, 'learningRate' ) ) {
		opts.learningRate = options.learningRate;
		if ( !isString( opts.learningRate ) ) {
			return new TypeError( format( '0h72W', 'learningRate', opts.learningRate ) );
		}
	}
	if ( hasOwnProp( options, 'loss' ) ) {
		opts.loss = options.loss;
		if ( !isString( opts.loss ) ) {
			return new TypeError( format( '0h72W', 'loss', opts.loss ) );
		}
	}
	if ( hasOwnProp( options, 'intercept' ) ) {
		opts.intercept = options.intercept;
		if ( !isBoolean( opts.intercept ) ) {
			return new TypeError( format( '0h72o', 'intercept', opts.intercept ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
