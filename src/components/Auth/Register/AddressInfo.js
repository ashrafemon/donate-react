import React from "react";
import {FormControlText, FormGroup, FormLabel, PortionTitle} from "../styled";

const AddressInfo = ({formData, handler}) => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>Where Do <br/> You Live?</PortionTitle>

            <FormGroup>
                <FormLabel htmlFor="street_address">Street Address</FormLabel>
                <FormControlText
                    type="text"
                    id="street_address"
                    placeholder="213/4 East"
                    value={formData.street_address}
                    onChange={(e) => handler(e.target.value, 'street_address')}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="city">City</FormLabel>
                <FormControlText
                    type="text"
                    id="city"
                    placeholder="Dhaka"
                    value={formData.city}
                    onChange={(e) => handler(e.target.value, 'city')}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="postal_code">Postal Code</FormLabel>
                <FormControlText
                    type="number"
                    id="postal_code"
                    placeholder="x x x x"
                    value={formData.post_code}
                    onChange={(e) => handler(e.target.value, 'post_code')}
                />
            </FormGroup>
        </>
    )
}

export default AddressInfo