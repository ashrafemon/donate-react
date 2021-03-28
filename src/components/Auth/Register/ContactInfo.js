import React from "react";
import {FormControlText, FormGroup, FormLabel, PortionTitle} from "../styled";

const ContactInfo = () => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>Contact <br/> Information</PortionTitle>

            <FormGroup>
                <FormLabel htmlFor="phone">Phone No</FormLabel>
                <FormControlText type="text" id="phone" placeholder="018"/>
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="alter_phone">Alternative Phone No</FormLabel>
                <FormControlText type="text" id="alter_phone" placeholder="017"/>
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="social">Social (Optional)</FormLabel>
                <FormControlText type="text" id="social" placeholder="https://"/>
            </FormGroup>
        </>
    )
}

export default ContactInfo