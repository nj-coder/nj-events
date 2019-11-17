# NJ-Events

Simple and light-weight event emitter library for JavaScript.

* Less than **1KB**.
* `on` method returns `ID`. Use this `ID` to remove specific listener or `event-name` to remove all the listeners.
* No aliases, just `emit` and `on` methods.

```js
const emitter = new NJEvents();

const id = emitter.on('hey', data => {
  console.log(data);
});

emitter.emit('hey', 'how are you?');
emitter.off(id); 
```
## Dependencies

There are no hard dependencies to actually use EventEmitter. The only reason you will want to run `npm install` to grab the development dependencies is to build the documentation or minify the source code. 