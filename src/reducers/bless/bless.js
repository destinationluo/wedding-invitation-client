/**
 * Created by brickspert on 2016/12/28.
 */

const GET_BLESS = 'GET_BLESS';
const GET_BLESS_SUCCESS = 'GET_BLESS_SUCCESS';
const GET_BLESS_FAIL = 'GET_BLESS_FAIL';

const COMMIT_BLESS = 'COMMIT_BLESS';
const COMMIT_BLESS_SUCCESS = 'COMMIT_BLESS_SUCCESS';
const COMMIT_BLESS_FAIL = 'COMMIT_BLESS_FAIL';
const initialState = {
    blesses: [],
    committing: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case GET_BLESS_SUCCESS:
            return {
                ...state,
                blesses: action.result.data
            }
        case COMMIT_BLESS:
            return {
                ...state,
                committing: true
            }
        case COMMIT_BLESS_SUCCESS:
            return {
                ...state,
                committing: false
            }
        case COMMIT_BLESS_SUCCESS:
            return {
                ...state,
                committing: false
            }
        default:
            return state;
    }
}

export function getBless() {
    return {
        //type: GET_BLESS_SUCCESS
        types: [GET_BLESS, GET_BLESS_SUCCESS, GET_BLESS_FAIL],
        promise: client=>client.post(`/wedding/getBless.php`),
    }
}

export function commitBless(name, text, callback) {
    return {
        //type: GET_BLESS_SUCCESS
        types: [COMMIT_BLESS, COMMIT_BLESS_SUCCESS, COMMIT_BLESS_FAIL],
        promise: client=>client.post(`/wedding/commitBless.php?name=${name}&text=${text}`,),
        afterSuccess: (dispatch, getState, response)=> {
            console.log(response.data);
            if (response.data.success) {
                if (callback) {
                    callback();
                }
                dispatch(getBless());
            } else {
                alert("提交失败!");
            }
        }
    }
}