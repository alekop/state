module state {

	export type StateCtor = { new (context: any): State };

	export interface IState {
		enter(...args: any[]): void;
		exit?(...args: any[]): void;
	}

	export abstract class State implements IState {
		static events: TransitionMap;

		protected context: any;
		static stateName: string = 'state';

		abstract enter(...args: any[]): void;
		exit: (...args: any[]) => void;

		constructor(context: any) {
			this.context = context;
		}

		trigger(type: string, ...args: any[]): boolean {
			var t = (<any>this.constructor).events[type];
			if (!t) {
				return false;
			}

			return this.transition(t, args);
		}

		private transition(t: ITransition, ...args: any[]): boolean {
			var newState: State;

			if (t.guard && !t.guard()) {
				return false;
			}

			if (t.state) {
				newState = this.instantiateState(t.state);
				if (this.exit) {
					this.exit();
				}
				this.context[(<any>this.constructor).stateName] = newState;
				newState.enter(args);
			}

			return true;
		}

		private instantiateState(state: StateCtor): State {
			var s = new state(this.context);
			return s;
		}
	}
}