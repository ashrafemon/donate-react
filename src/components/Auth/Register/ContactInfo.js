import React from "react";
import {FormControlText, FormGroup, FormLabel, PortionTitle} from "../styled";

const ContactInfo = ({formData, handler}) => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>Contact <br/> Information</PortionTitle>

            <FormGroup>
                <FormLabel htmlFor="phone">Phone No</FormLabel>
                <FormControlText
                    type="text"
                    id="phone"
                    placeholder="018"
                    value={formData.phone}
                    onChange={(e) => handler(e.target.value, 'phone')}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="alter_phone">Alternative Phone No</FormLabel>
                <FormControlText
                    type="text"
                    id="alter_phone"
                    placeholder="017"
                    value={formData.alternate_phone}
                    onChange={(e) => handler(e.target.value, 'alternate_phone')}
                />
            </FormGroup>

            <FormGroup>
                <FormLabel htmlFor="social_link">Social (Optional)</FormLabel>
                <FormControlText
                    type="text"
                    id="social_link"
                    placeholder="https://"
                    value={formData.social_link}
                    onChange={(e) => handler(e.target.value, 'social_link')}
                />
            </FormGroup>
        </>
    )
}

export default ContactInfo