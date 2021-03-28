import React from "react";
import {FormControlText, FormGroup, FormLabel, PortionTitle} from "../styled";

const AddressInfo = () => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>Where Do <br/> You Live?</PortionTitle>

            <FormGroup>
                <FormLabel htmlFor="street_address">Street Address</FormLabel>
                <FormControlText type="text" id="street_address" placeholder="213/4 East"/>
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="city">City</FormLabel>
                <FormControlText type="text" id="city" placeholder="Dhaka"/>
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="postal_code">Postal Code</FormLabel>
                <FormControlText type="number" id="postal_code" placeholder="x x x x"/>
            </FormGroup>
        </>
    )
}

export default AddressInfo