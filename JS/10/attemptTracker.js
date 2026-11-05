const createAttemptTracker = () => {
    const attemptTracker = new WeakMap();

    const registerAttempt = (request) => {
        if(!attemptTracker.has(request)) {
            attemptTracker.set(request, 0);
        }

        let counter = attemptTracker.get(request);
        ++ counter;
        attemptTracker.set(request, counter);

        return counter;
    }
    
    const getAttempts = (request) => {
        if(!attemptTracker.has(request)) {
            return 0;
        }
        
        return attemptTracker.get(request);
    }
    
    const resetAttempts = (request) => {
        return attemptTracker.delete(request);
    }

    return {registerAttempt, getAttempts, resetAttempts}
}

export default createAttemptTracker;