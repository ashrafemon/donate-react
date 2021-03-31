import React, {useRef} from "react";
import {FormControlText, FormGroup, FormLabel, PasswordToggleButton, PortionTitle} from "../styled";
import {FaEye} from "react-icons/fa";

const BasicInfo = ({formData, handler}) => {

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
                <FormLabel htmlFor="name">Name*</FormLabel>
                <FormControlText
                    value={formData.name}
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    onChange={(e) => handler(e.target.value, 'name')}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="email">Username*</FormLabel>
                <FormControlText
                    value={formData.email}
                    type="email"
                    id="email"
                    placeholder="johndoe@email.com"
                    onChange={(e) => handler(e.target.value, 'email')}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="password">Password* (minimum 6 characters)</FormLabel>
                <FormControlText
                    value={formData.password}
                    ref={passwordRef}
                    type="password"
                    id="password"
                    placeholder="******"
                    onChange={(e) => handler(e.target.value, 'password')}
                />
                <PasswordToggleButton type="button" onClick={passwordToggleHandler}><FaEye/></PasswordToggleButton>
            </FormGroup>
        </>
    )
}

export default BasicInfo