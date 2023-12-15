const defaultState = {
    animalList: [],
};

const findIndexByName = (arr, name) => {
    return arr.findIndex((item) => item.name === name);
};

const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const loadFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

export const reducer = (state = loadFromLocalStorage('animals') ||  defaultState, action) => {
    switch (action.type) {
        case "ADD_ANIMAL":
            const foundIndex = findIndexByName(state.animalList, action.payLoad.name);
            if (foundIndex === -1) {
                const newState = { ...state, animalList: [...state.animalList, action.payLoad] };
                saveToLocalStorage('animals', newState);
                return newState;
            } else {
                const updatedAnimalArr = [...state.animalList];
                updatedAnimalArr[foundIndex] = {
                    ...updatedAnimalArr[foundIndex],
                    count: updatedAnimalArr[foundIndex].count + action.payLoad.count,
                };
                console.log(state.animalList[foundIndex].count);
               
                const newState = { ...state, animalList: updatedAnimalArr };
                saveToLocalStorage('animals', newState);
                return newState;
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
        case "CLEAR_CART":
            return { ...state, animalList: [] };
        default:
            return state;
    }
};