import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_PERTICULAR_DATA} from "./actionTypes.js";
import Axios from "axios"

const axios = Axios.create({
    baseURL:"https://data.cityofnewyork.us/"
})

const getDataRequest = () => {
    return {
        type : GET_DATA_REQUEST
    }
}

const getDataSuccess = (payload) => {
    return {
        type : GET_DATA_SUCCESS,
        payload
    }
}

const getDataFailure = (error) => {
    return {
        type : GET_DATA_FAILURE,
        payload : error
    }
}

const getPerticularDataSuccess = (payload) => {
    return {
        type : GET_PERTICULAR_DATA,
        payload
    }
}

const getData = (page) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:"/resource/h9gi-nx95.json",
        method : "get",
        params : {
            $offset : page,
            $limit: 9,
        }
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataSuccess(res.data))
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(getDataFailure(err));
        console.log(err);
    })
}

const filterData = (page, date) => (dispatch) => {
    dispatch(getDataRequest())

    const config = {
        url:`/resource/h9gi-nx95.json?crash_date=${date}T00:00:00.000`,
        method : "get",
        params : {
            $offset : page,
            $limit: 9,
        }
    }

    return axios(config)
    .then((res) => {
        dispatch(getDataSuccess(res.data))
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(getDataFailure(err));
        console.log(err);
    })
}

const getPerticularData = (data) => {
    getPerticularDataSuccess(data)
}

export {getDataRequest, getDataSuccess, getDataFailure, getData, filterData, getPerticularData}