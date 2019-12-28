const sessionMiddleware = store => next => action => {
    switch (action.type) {
        default:
            break;
    }
    return next(action);
};

export default sessionMiddleware;
