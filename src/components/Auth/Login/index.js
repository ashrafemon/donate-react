import React, {useRef} from "react";
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

const Login = () => {
    const passwordRef = useRef(null)

    const passwordToggleHandler = () => {
        passwordRef.current.type === "password" ?
            passwordRef.current.type = "text" :
            passwordRef.current.type = 'password'
    }

    return (
        <AuthWrapper>
            <LogoSideBox>
                <Logo/>
            </LogoSideBox>
            <DividerBox>
                <PortionTitle>Sign In</PortionTitle>


                <FormGroup>
                    <FormLabel htmlFor="email">Email or Username</FormLabel>
                    <FormControlText type="email" id="email" placeholder="johndoe@gmail.com"/>
                </FormGroup>

                <FormGroup>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControlText ref={passwordRef} type="password" id="password" placeholder="******"/>
                    <PasswordToggleButton onClick={passwordToggleHandler}><FaEye/></PasswordToggleButton>
                </FormGroup>

                <FormGroup>
                    <AuthButton>Login</AuthButton>
                </FormGroup>

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