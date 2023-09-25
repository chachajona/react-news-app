import * as types from '../config/actionTypes';

let nextAlertId = 1; // Initialize a counter for generating unique IDs

export const setAlert = (type, text, timeout = 5000) => (dispatch) => {
    const id = nextAlertId++; // Generate a unique ID for the alert

    dispatch({
        type: types.SET_ALERT,
        payload: { text, type, id },
    });

    setTimeout(
        () =>
            dispatch({
                type: types.REMOVE_ALERT,
                payload: id,
            }),
        timeout
    );
};