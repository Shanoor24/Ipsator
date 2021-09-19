import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_PERTICULAR_DATA } from "./actionTypes.js";

const init = {
    data : [],
    perticular_data: [],
    isLoading : false,
    isError : false,
}

const carReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state, isLoading : true
            }
        }

        case GET_DATA_SUCCESS: {
            return {
                ...state, data : action.payload, isLoading : false
            }
        }

        case GET_DATA_FAILURE: {
            return {
                ...state, isLoading : false, isError : true
            }
        }

        case GET_PERTICULAR_DATA: {
            return {
                ...state, perticular_data : action.payload
            }
        }
            
        default:
            return state;
    }
}

export {carReducer};