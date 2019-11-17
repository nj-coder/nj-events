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
There are no hard dependencies to actually use NJEvents. The only reason you will want to run `npm install` is to build/modify the source code. 

## Installation
NJ-Events can be installed using the Node Package Manager, [NPM](https://www.npmjs.com/) or including direct link to your project.
### Using npm
```
npm install --save nj-events
```

## Releases and Changes
Check out the [Releases](https://github.com/nj-coder/nj-events/releases) and [Change Logs](https://github.com/nj-coder/nj-events/blob/master/Changelog.md) for more information. 

## Copyright and License
[The MIT license](LICENSE) 