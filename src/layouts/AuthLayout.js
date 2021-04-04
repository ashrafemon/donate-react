import React, {useEffect} from "react";
import {ToastMessage} from "../components/GlobalStyled";
import {FaTimes} from "react-icons/fa";
import {dispatchToggleMessage} from "../store/actions/auth/actions";
import {useDispatch, useSelector} from "react-redux";

const AuthLayout = ({children}) => {
    const dispatch = useDispatch()
    const {show, type, text} = useSelector(state => state.auth.message)

    const closeMessage = () => {
        dispatch(dispatchToggleMessage({
            show: false,
            type: '',
            text: ''
        }))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(dispatchToggleMessage({
                show: false,
                type: '',
                text: ''
            }))
        }, 6000)
    }, [dispatch,show])

    return (
        <>
            {show && (
                <ToastMessage type={type}>
                    {text}
                    <FaTimes onClick={closeMessage}/>
                </ToastMessage>
            )}
            {children}
        </>
    )
}

export default AuthLayout