import React from "react";
import {ToastMessage} from "../components/Auth/styled";
import {FaTimes} from "react-icons/fa";
import {dispatchToggleMessage} from "../store/actions/auth/actions";
import {useDispatch, useSelector} from "react-redux";

const Layout = ({children}) => {
    const dispatch = useDispatch()
    const message = useSelector(state => state.auth.message)

    const closeMessage = () => {
        dispatch(dispatchToggleMessage({
            show: false,
            type: '',
            text: ''
        }))
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         closeMessage()
    //     }, 3000)
    // }, [message.show])

    return (
        <>
            {message.show && (
                <ToastMessage type={message.type}>
                    {message.text}
                    <FaTimes onClick={closeMessage}/>
                </ToastMessage>
            )}
            {children}
        </>
    )
}

export default Layout