# NJ-Events

Simple and light-weight event emitter library for JavaScript.

* No dependencies, tess than **1KB** pure JavaScript implementation.
* `on` method returns `ID`. Use this `ID` to remove specific listener or `event-name` to remove all the listeners.
* No aliases, just `emit`, `on` and `off` methods.

```js
const emitter = new NJEvents();

const id = emitter.on('hey', data => {
  console.log(data);
});

emitter.emit('hey', 'how are you?');
emitter.off(id); 
```

## Installation
```
npm install --save nj-events
```

## Usage
NJ-Events are driven by the `on`, `emit`, `off` methods which are detailed below.

### Registering an event
```js
const emitter = new NJEvents();

const id = emitter.on('hey', data => {
  console.log(data);
});
```
### Triggering an event
```js
emitter.emit('hey', 'how are you?');
emitter.off(id); 
```
### Unregistering an event
```js
emitter.off('hey'); // unregister using event-name 
emitter.off(id); // unregister using the event ID
```
## Releases and Changes
Check out the [Releases](https://github.com/nj-coder/nj-events/releases) and [Change Logs](https://github.com/nj-coder/nj-events/blob/master/Changelog.md) for more information. 

## Copyright and License
[The MIT license](LICENSE) 