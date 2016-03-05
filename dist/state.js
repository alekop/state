var state;
(function (state_1) {
    class State {
        constructor(context) {
            this.context = context;
        }
        trigger(type, ...args) {
            var t = this.constructor.events[type];
            if (!t) {
                return false;
            }
            return this.transition(t, args);
        }
        transition(t, ...args) {
            var newState;
            if (t.guard && !t.guard()) {
                return false;
            }
            if (t.state) {
                newState = this.instantiateState(t.state);
                if (this.exit) {
                    this.exit();
                }
                this.context[this.constructor.stateName] = newState;
                newState.enter(args);
            }
            return true;
        }
        instantiateState(state) {
            var s = new state(this.context);
            return s;
        }
    }
    State.stateName = 'state';
    state_1.State = State;
})(state || (state = {}));
