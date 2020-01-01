import sessionReducer, {initialState} from '../session.reducer';

describe('Session reducer', () => {
    let state = {
        ...initialState
    };
    afterEach(() => {
        state = {
            ...initialState
        };
    });
    describe("Here goes the action name", () => {
        it('Describe what the end result of the action is', () => {
            const action = {
                type: "",
                payload: {
                    data: ""
                }
            };
            const newState = sessionReducer(state, action);
            // expect(newState.error).toBe(false);
        });
        it('Describes another case of the same action', () => {
            const badrequestaction = {
                type: "",
                error: true,
                payload: {
                    data: ""
                }
            };
            const newState = sessionReducer(state, badrequestaction);
            // expect(newState.error).toBe(true);
        });
    });
});
