module state {

	export interface ITransition {
		guard?: () => boolean;
		action?: () => void;
		state?: StateCtor;
	}

	export type TransitionMap = {[index: string]: ITransition};
}