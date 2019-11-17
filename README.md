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

emitter.emit('hey', 2);
emitter.off('hey', id); /**OR**/ emitter.off('hey');
```
