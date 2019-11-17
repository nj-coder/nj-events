class NJEvent {
    constructor() {
        this.events = {};
    }
    /**
     * register event
     */
    on(event, listener, once) {
        if (typeof (listener) != 'function') {
            throw ('listener is not a function');
        }
        let evID = Math.random().toString(36).substring(7);
        (this.events[event] = this.events[event] || {})[evID] = {
            listener: listener,
            once: once
        };
        return evID;
    }
    /**
     * unregister event
     */
    off(event, evID) {
        if (typeof (event) == 'undefined' && typeof (evID) == 'undefined') {
            this.events = {};
        } else {
            if (event && evID) {
                delete this.events[event][evID];
            } else {
                delete this.events[event];
            }
        }
    }
    /**
     * emit event
     */
    emit(event) {
        var args = [].slice.call(arguments, 1);
        if (this.events[event]) {
            Object.keys(this.events[event]).forEach(ev => {
                this.events[event][ev].listener.call(null, args.length == 1 ? args[0] : args);
            });
        }
    }

}