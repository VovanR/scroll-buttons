# ScrollButtons

[![Build Status][travis-image]][travis-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Scrolls list on buttons hover ([Demo](https://jsfiddle.net/VovanR/7m4838yz/))

## Usage

```javascript
var scrollButtons = new ScrollButtons({
    $scroll: $('.js-list__scroll'),
    $buttons: $('.js-scroll-buttons__button'),
});
```

![](preview/example.gif)

## Development

### Initialize
```sh
npm i
```

### Test
*In console*
```sh
npm run test
```

*In browser*
```sh
open ./text/index-test.html
```

### Lint
```sh
npm run lint
```

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[travis-url]: https://travis-ci.org/VovanR/scroll-buttons
[travis-image]: http://img.shields.io/travis/VovanR/scroll-buttons.svg

[depstat-url]: https://david-dm.org/VovanR/scroll-buttons
[depstat-image]: https://david-dm.org/VovanR/scroll-buttons.svg

[depstat-dev-url]: https://david-dm.org/VovanR/scroll-buttons
[depstat-dev-image]: https://david-dm.org/VovanR/scroll-buttons/dev-status.svg
