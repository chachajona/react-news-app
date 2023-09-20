import * as types from '../config/actionTypes';

export const setAlert = (type, text, timeout = 5000) => (dispatch) => {
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
}