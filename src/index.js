var NJEvents = function () {
    this.events = {};
    this.listeners = {};
};
/**
 * register event
 * @param {string} event
 * @param {function} cb
 * @param {string} id
 */
NJEvents.prototype.on = function (name, cb, id) {
    if (typeof (cb) != 'function') {
        throw ('invalid listener.');
    }
    let evID = id || Math.random().toString(36).substring(7);
    (this.events[name] = this.events[name] || []).push(evID);
    this.listeners[evID] = {
        cb: cb, // call back
        ev: name // event name
    };
    return evID;
};
/** 
 * register a one time event 
*/
NJEvents.prototype.once = function (event, listener, id) {
    let key = this.on(event, listener, id);
    this.listeners[key].once = true;
};
/**
 * unregister event
 * @param {string} event 
 * @param {string} evID 
 */
NJEvents.prototype.off = function (key) {
    if (this.events[key]) { // check if key matches a event name
        this.events[key].forEach(ev => {
            delete this.listeners[ev];
        });
        delete this.events[key];
    } else if (this.listeners[key]) { // check if key matches a listener name
        let listener = this.listeners[key];
        let event = this.events[listener.ev];
        event.splice(key, 1);
        delete this.listeners[key];
    }
};
/**
 * emit event
 * @param {string} event 
 */
NJEvents.prototype.emit = function (name) {
    var args = [].slice.call(arguments, 1);
    (this.events[name] || []).forEach(key => {
        let listener = this.listeners[key];
        listener.cb(args.length == 1 ? args[0] : args);
        if (listener.once)
            this.off(name);
    });
};