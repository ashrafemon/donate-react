import React, {useRef, useState} from "react";
import {
    AccessText,
    AuthButton,
    AuthWrapper,
    DividerBox,
    FormControlText,
    FormGroup,
    FormLabel,
    LinkText,
    LogoSideBox,
    PasswordToggleButton,
    PortionTitle
} from "../styled";
import Logo from "../../shared/Logo";
import {Link} from "react-router-dom";
import {FaEye} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {dispatchToggleMessage, login} from "../../../store/actions/auth/actions";

const Login = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const passwordRef = useRef(null)

    const passwordToggleHandler = () => {
        passwordRef.current.type === "password" ?
            passwordRef.current.type = "text" :
            passwordRef.current.type = 'password'
    }
    const submitHandler = (e) => {
        e.preventDefault()

        if (formData.email === '' && !formData.email.includes('@')) {
            dispatch(dispatchToggleMessage({
                show: true,
                type: 'danger',
                text: 'Email should be a valid address'
            }))
        } else if (formData.password === '' && formData.password.length < 6) {
            dispatch(dispatchToggleMessage({
                show: true,
                type: 'danger',
                text: 'Password should be minimum 6 characters'
            }))
        } else {
            dispatch(login(formData))
        }
    }
    const fieldChangeHandler = (value, item) => {
        setFormData({
            ...formData,
            [item]: value
        })
    }

    return (
        <AuthWrapper>
            <LogoSideBox>
                <Logo/>
            </LogoSideBox>
            <DividerBox>
                <PortionTitle>Sign In</PortionTitle>

                <form onSubmit={submitHandler}>
                    <FormGroup>
                        <FormLabel htmlFor="email">Email or Username</FormLabel>
                        <FormControlText
                            value={formData.email}
                            type="email"
                            id="email"
                            placeholder="johndoe@gmail.com"
                            onChange={(e) => fieldChangeHandler(e.target.value, 'email')}
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <FormControlText
                            value={formData.password}
                            ref={passwordRef}
                            type="password"
                            id="password"
                            placeholder="******"
                            onChange={(e) => fieldChangeHandler(e.target.value, 'password')}
                        />
                        <PasswordToggleButton
                            type="button"
                            onClick={passwordToggleHandler}
                        >
                            <FaEye/>
                        </PasswordToggleButton>
                    </FormGroup>

                    <FormGroup>
                        <AuthButton type="submit">Login</AuthButton>
                    </FormGroup>
                </form>

                <FormGroup>
                    <Link to="/">
                        <LinkText>Forget Password?</LinkText>
                    </Link>
                    <AccessText>Don't have an account? <Link to="/register">Sign Up</Link></AccessText>
                </FormGroup>

            </DividerBox>
        </AuthWrapper>
    )
}

export default Login