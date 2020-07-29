# Base64

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Base64 encoding and decoding for `ArrayBuffer`.

## Installation

```sh
npm install @borderless/base64 --save
```

## Usage

```js
import { encode, encodeUrl, decode } from "@borderless/base64";

expect(encode(new TextEncoder().encode("hello"))).toEqual("aGVsbG8=");
expect(encode(new TextEncoder().encode("你好"))).toEqual("5L2g5aW9");
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

MIT

Originally based on [base64-arraybuffer](https://github.com/niklasvh/base64-arraybuffer), enhanced using TypeScript, ESM and support for Base64URL.

[npm-image]: https://img.shields.io/npm/v/@borderless/base64.svg?style=flat
[npm-url]: https://npmjs.org/package/@borderless/base64
[downloads-image]: https://img.shields.io/npm/dm/@borderless/base64.svg?style=flat
[downloads-url]: https://npmjs.org/package/@borderless/base64
[travis-image]: https://img.shields.io/travis/BorderlessLabs/base64.svg?style=flat
[travis-url]: https://travis-ci.org/BorderlessLabs/base64
[coveralls-image]: https://img.shields.io/coveralls/BorderlessLabs/base64.svg?style=flat
[coveralls-url]: https://coveralls.io/r/BorderlessLabs/base64?branch=master
