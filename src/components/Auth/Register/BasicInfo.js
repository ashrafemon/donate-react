import React, {useRef} from "react";
import {FormControlText, FormGroup, FormLabel, PasswordToggleButton, PortionTitle} from "../styled";
import {FaEye} from "react-icons/fa";

const BasicInfo = () => {

    const passwordRef = useRef(null)

    const passwordToggleHandler = () => {
        passwordRef.current.type === "password" ?
            passwordRef.current.type = "text" :
            passwordRef.current.type = 'password'
    }

    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>Let Us Know <br/> About Your</PortionTitle>

            <FormGroup>
                <FormLabel htmlFor="name">Username</FormLabel>
                <FormControlText type="text" id="name" placeholder="johndoe"/>
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="email">Username</FormLabel>
                <FormControlText type="email" id="email" placeholder="johndoe@email.com"/>
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControlText ref={passwordRef} type="password" id="password" placeholder="******"/>
                <PasswordToggleButton onClick={passwordToggleHandler}><FaEye/></PasswordToggleButton>
            </FormGroup>
        </>
    )
}

export default BasicInfo