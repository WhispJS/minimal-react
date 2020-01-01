import sessionMiddleware from './../session.middleware';
import {initialState} from '../session.reducer';

describe('Session middleware', () => {
    const store = {
        dispatch: jest.fn(),
        getState: () => (initialState)
    };
    const next = jest.fn();
    const apicallback = jest.fn().mockResolvedValue('');
    const middleware = sessionMiddleware(store)(next);
    afterEach(() => {
        jest.clearAllMocks();
    });
    describe("Here goes the action", () => {
        it('Description of what the middleware should be doing in the first case ', () => {
            const goodlocationaction = {
                type: "",
                payload: {
                    data: ""
                }
            };
            middleware(goodlocationaction);
            expect(store.dispatch).toHaveBeenCalledTimes(1); // Check if an action has been dispatched
            const dispatchedAction = store.dispatch.mock.calls[0][0];
            expect(dispatchedAction.type).toBe("Specific action"); // Checks if the action dispatched is the correct one
        });
        it('Description of what the middleware should be doing in the second case ', () => {
            const goodlocationaction = {
                type: "LOCATION_CHANGE",
                payload: {
                    data: ""
                }
            };
            middleware(goodlocationaction);
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            const dispatchedAction = store.dispatch.mock.calls[0][0];
            expect(dispatchedAction.type).toBe("");
            expect(dispatchedAction.payload.data).toBe(""); // We can also check the payload of the resulting action to be correct
        });
    });
});
