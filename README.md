# NJ-Events

Simple and light-weight event emitter library for JavaScript.

* Only **500 bytes**.
* `on` method returns `ID`. You don’t need to save
  callback to variable for `removeListener`.
* No aliases, just `emit` and `on` methods.

```js
const emitter = new NJEvents();

const id = emitter.on('hey', data => {
  console.log(data);
});

emitter.emit('hey', 'how\'s it going?');
emitter.off('hey', id); /*OR*/ emitter.off('hey');
```
## Dependencies

There are no hard dependencies. The only reason you will want to run `npm install` to grab the development dependencies is to build the documentation or minify the source code. No other scripts are required to actually use EventEmitter.