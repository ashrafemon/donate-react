import * as types from "./types"
import {API_URL} from "../../../utils/urls";
import {formDataBuilder, jsonTypeHeaders} from "../../../utils/helpers";

const TOKEN = localStorage.getItem('token')

// Actions
export const dispatchToggleMessage = payload => ({
    type: types.TOGGLE_MESSAGE,
    payload
})

export const dispatchFetchBloodGroups = payload => ({
    type: types.FETCH_BLOOD_GROUPS,
    payload
})

export const dispatchLogin = payload => ({
    type: types.LOGIN,
    payload
})

export const dispatchMe = payload => ({
    type: types.CURRENT_USER,
    payload
})

export const dispatchRegister = payload => ({
    type: types.REGISTER,
    payload
})

export const dispatchResetRegister = payload => ({
    type: types.RESET_REGISTER,
    payload
})

export const dispatchLogout = () => ({
    type: types.LOGOUT
})

// Mutations
export const fetchBloodGroups = () => dispatch => {
    fetch(API_URL + 'blood_group', {
        method: 'GET',
        headers: jsonTypeHeaders
    })
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            if (res.status === 'done') {
                dispatch(dispatchFetchBloodGroups(res.blood_groups))
            }
        })
        .catch(err => console.log(err))
}

export const login = data => dispatch => {
    // console.log(data)
    fetch(API_URL + 'auth/login', {
        method: 'POST',
        headers: jsonTypeHeaders,
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.status === 'error') {
                dispatch(dispatchToggleMessage({
                    show: true,
                    type: 'danger',
                    text: res.message
                }))
            } else if (res.status === 'done') {
                dispatch(dispatchToggleMessage({
                    show: true,
                    type: 'success',
                    text: res.message
                }))
                dispatch(dispatchLogin({
                    token: res.token,
                    currentUser: res.user,
                    isAuthenticate: true
                }))
                localStorage.setItem('token', res.token)
            }
        })
        .catch(err => console.log(err))
}

export const fetchMe = () => dispatch => {
    fetch(API_URL + 'auth/me', {
        method: 'GET',
        headers: {
            ...jsonTypeHeaders,
            'Authorization': TOKEN
        }
    })
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            if (res.status === 'done' && res.user !== undefined) {
                dispatch(dispatchMe({
                    token: TOKEN,
                    currentUser: res.user,
                    isAuthenticate: true
                }))
            }
        })
        .catch(err => console.log(err))
}

export const register = data => dispatch => {
    let formedData = formDataBuilder(data)

    fetch(API_URL + 'auth/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formedData
    })
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            if (res.status === 'done') {
                dispatch(dispatchToggleMessage({
                    show: true,
                    type: 'success',
                    text: res.message
                }))
                dispatch(dispatchRegister({
                    status: 'done',
                    registered: true
                }))
            }
        })
        .catch(err => console.log(err))
}

export const logout = () => dispatch => {
    fetch(API_URL + 'auth/logout', {
        method: 'POST',
        headers: {
            ...jsonTypeHeaders,
            'Authorization': TOKEN
        }
    })
        .then(res => res.json())
        .then(res => {
            // console.log(res)
            if (res.status === 'done') {
                dispatch(dispatchToggleMessage({
                    show: true,
                    type: 'success',
                    text: res.message
                }))
                dispatch(dispatchLogout())
                localStorage.removeItem('token')
            }
        })
        .catch(err => console.log(err))
}