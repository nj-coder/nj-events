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
Registering the event can be done using 
* `on()` - the listener is registered and will be active until removed explicitly.
* `once()` - the listener is removed after first trigger.
```js
const emitter = new NJEvents();

const id_on = emitter.on('hey', data => { // listener is registered until removed
  console.log(data);
});

const id_once = emitter.once('hey', data => { // listener is removed after first trigger
  console.log(data);
});
```
### Triggering an event
An event is triggered using the `emit()`
```js
emitter.emit('hey', 'how are you?');
```
### Unregistering an event
An event can be unregistered using the `off()` with the below parameters
* `event_name` - any matching events and its listeners will be removed.
* `id` - event with the particular id will be removed, the event would still exist.
```js
emitter.off('hey'); // unregister using event-name 
emitter.off(id); // unregister using the event ID
```
## Releases and Changes
Check out the [Releases](https://github.com/nj-coder/nj-events/releases) and [Change Logs](https://github.com/nj-coder/nj-events/blob/master/Changelog.md) for more information. 

## Copyright and License
[The MIT license](LICENSE) 