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

export function getBless(props) {
    return {
        //type: GET_BLESS_SUCCESS
        types: [GET_BLESS, GET_BLESS_SUCCESS, GET_BLESS_FAIL],
        promise: client=>client.post(`/wedding/getBless`),
        afterSuccess: (dispatch, getState, response)=> {
            // console.log(response.data);
            if (props == undefined) {
                return;
            }
            props.bless.blesses = response.data;
        }
    }
}

export function commitBless(props, name, phone, num, text, callback) {
    return {
        //type: GET_BLESS_SUCCESS
        types: [COMMIT_BLESS, COMMIT_BLESS_SUCCESS, COMMIT_BLESS_FAIL],
        promise: client=>client.post(`/wedding/commitBless?name=${name}&text=${text}&phone=${phone}&num=${num}`,),
        afterSuccess: (dispatch, getState, response)=> {
            console.log(response.data);
            if (response.data.success) {
                if (callback) {
                    callback();
                }
                dispatch(getBless(props));
            } else {
                alert("服务器出了点问题呢!你可以单发给我吗?谢啦!");
            }
        }
    }
}