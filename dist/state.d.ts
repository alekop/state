declare module state {
    type StateCtor = {
        new (context: any): State;
    };
    interface IState {
        enter(...args: any[]): void;
        exit?(...args: any[]): void;
    }
    abstract class State implements IState {
        static events: TransitionMap;
        protected context: any;
        static stateName: string;
        abstract enter(...args: any[]): void;
        exit: (...args: any[]) => void;
        constructor(context: any);
        trigger(type: string, ...args: any[]): boolean;
        private transition(t, ...args);
        private instantiateState(state);
    }
}
declare module state {
    interface ITransition {
        guard?: () => boolean;
        action?: () => void;
        state?: StateCtor;
    }
    type TransitionMap = {
        [index: string]: ITransition;
    };
}
