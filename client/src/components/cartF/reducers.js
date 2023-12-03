const defaultState = {
    animalList: [],
};

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_ANIMAL":
            const foundIndex = findIndexByName(state.animalList, action.payLoad.name);
            if (foundIndex === -1) {
                return { ...state, animalList: [...state.animalList, action.payLoad] };
            } else {
                const updatedAnimalArr = [...state.animalList];
                updatedAnimalArr[foundIndex] = {
                    ...updatedAnimalArr[foundIndex],
                    count: updatedAnimalArr[foundIndex].count + action.payLoad.count,
                };
                console.log(state.animalList[foundIndex].count);
                return { ...state, animalList: updatedAnimalArr };
            }
        case "INCREMENT_COUNT":
            return {
                ...state,
                animalList: state.animalList.map((animal) => {
                    if (animal.name === action.payLoad.name) {
                        return { ...animal, count: animal.count + 1 };
                    }
                    return animal;
                }),
            };
        case "DECREMENT_COUNT":
            return {
                ...state,
                animalList: state.animalList.map((animal) => {
                    if (animal.name === action.payLoad.name && animal.count > 0) {
                        return { ...animal, count: animal.count - 1 };
                    }
                    return animal;
                }),
            };
        default:
            return state;
    }
};