export const action = { type: "", payLoad: {} };

export const incrementCount = (animal) => {
    return {
        type: "INCREMENT_COUNT",
        payLoad: { name: animal },
    };
};

export const decrementCount = (animal) => {
    return {
        type: "DECREMENT_COUNT",
        payLoad: { name: animal },
    };
};