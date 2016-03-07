///<reference path="../typings/jasmine.d.ts"/>
describe('State', function () {
    it('should fail(if instantiated with invalid arguments', function () {
        fail('not implemented');
    });
    it('should instantiate with correct arguments', function () {
        fail('not implemented');
    });
    it('trigger() should ignore and invalid event', function () {
        fail('not implemented');
    });
    it('trigger() should accepts a valid event', function () {
        fail('not implemented');
    });
    describe('transition', function () {
        it('should run guard function, if defined', function () {
            fail('not implemented');
        });
        it('should abort the transition and return false if the guard returns false', function () {
            fail('not implemented');
        });
        it('should run the action, if defined', function () {
            fail('not implemented');
        });
        it('should complete without changing state, if there is no target state', function () {
            fail('not implemented');
        });
        describe('change state', function () {
            it('should call `exit` on the current state, if defined', function () {
                fail('not implemented');
            });
            it('should change the context\'s state', function () {
                fail('not implemented');
            });
            it('should call `enter` on the new state', function () {
                fail('not implemented');
            });
            it('should pass the event args to `enter`', function () {
                fail('not implemented');
            });
        });
    });
});
