///<reference path="../typings/jasmine.d.ts"/>

describe('State', () => {

	it('should fail(if instantiated with invalid arguments', () => {
		fail('not implemented');			
	});

	it('should instantiate with correct arguments', () => {
		fail('not implemented');
	});

	it('trigger() should ignore and invalid event', () => {
		fail('not implemented');
	});

	it('trigger() should accepts a valid event', () => {
		fail('not implemented');
	});

	describe('transition', () => {
		it('should run guard function, if defined', () => {
			fail('not implemented');
		});

		it('should abort the transition and return false if the guard returns false', () => {
			fail('not implemented');
		});

		it('should run the action, if defined', () => {
			fail('not implemented');
		});

		it('should complete without changing state, if there is no target state', () => {
			fail('not implemented');
		});

		describe('change state', () => {
			it('should call `exit` on the current state, if defined', () => {
				fail('not implemented');
			});

			it('should change the context\'s state', () => {
				fail('not implemented');
			});

			it('should call `enter` on the new state', () => {
				fail('not implemented');
			});

			it('should pass the event args to `enter`', () => {
				fail('not implemented');
			});
		});
	});
});
