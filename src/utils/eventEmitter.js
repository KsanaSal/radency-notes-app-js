class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (typeof this.events[event] !== "object") {
            this.events[event] = [];
        }

        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (typeof this.events[event] === "object") {
            this.events[event].forEach((listener) => listener(...args));
        }
    }
}
const emitter = new EventEmitter();

export default emitter;
