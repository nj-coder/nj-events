var NJEvents=function(){this.events={},this.listeners={}};NJEvents.prototype.on=function(e,t,s){if("function"!=typeof t)throw"invalid listener.";let n=s||Math.random().toString(36).substring(7);return(this.events[e]=this.events[e]||[]).push(n),this.listeners[n]={cb:t,ev:e},n},NJEvents.prototype.once=function(e,t,s){let n=this.on(e,t,s);this.listeners[n].once=!0},NJEvents.prototype.off=function(e){if(this.events[e])this.events[e].forEach(e=>{delete this.listeners[e]}),delete this.events[e];else if(this.listeners[e]){let t=this.listeners[e];this.events[t.ev].splice(e,1),delete this.listeners[e]}},NJEvents.prototype.emit=function(e){var t=[].slice.call(arguments,1);(this.events[e]||[]).forEach(s=>{let n=this.listeners[s];n.cb(1==t.length?t[0]:t),n.once&&this.off(e,ev)})};