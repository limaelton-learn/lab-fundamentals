const createCounter = (initial) => {
    const count = () => {
        return ++initial;
    }

    return count;
};

export default createCounter;