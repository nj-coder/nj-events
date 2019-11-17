var NJEvents = function () {
    this.events = {};
};
/**
 * register event
 * @param {string} event
 * @param {function} cb
 * @param {string} id
 */
NJEvents.prototype.on = function (event, cb, id) {
    if (typeof (cb) != 'function') {
        throw ('invalid listener.');
    }
    let evID = id || Math.random().toString(36).substring(7);
    (this.events[event] = this.events[event] || {})[evID] = {
        cb: cb
    };
    return evID;
};
/** 
 * register a one time event 
*/
NJEvents.prototype.once = function (event, listener, id) {
    let ev = this.on(event, listener, id);
    this.events[event][ev].once = true;
};
/**
 * unregister event
 * @param {string} event 
 * @param {string} evID 
 */
NJEvents.prototype.off = function (event, evID) {
    if (event && evID) {
        delete this.events[event][evID];
    } else {
        delete this.events[event];
    }
};
/**
 * emit event
 * @param {string} event 
 */
NJEvents.prototype.emit = function (event) {
    var args = [].slice.call(arguments, 1);
    Object.keys(this.events[event] || {}).forEach(ev => {
        let e = this.events[event][ev];
        e.cb(args.length == 1 ? args[0] : args);
        if (e.once)
            this.off(event, ev);
    });
};