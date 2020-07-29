import UPDATE_NAME from '../constants';

export const updateNameAction = name => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
};