import React, {useState} from "react";
import {AuthButton, AuthWrapper, DividerBox, FormGroup, LogoSideBox, SuggestText} from "../styled";
import Logo from "../../shared/Logo";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import BloodGroupInfo from "./BloodGroupInfo";
import WeightInfo from "./WeightInfo";
import GenderInfo from "./GenderInfo";
import AddressInfo from "./AddressInfo";

const Register = () => {
    const [activeStep, setActiveStep] = useState(1)
    const nextHandler = () => {
        setActiveStep(activeStep + 1)
    }

    return (
        <AuthWrapper>
            <LogoSideBox>
                <Logo/>
                <SuggestText>
                    Provide your real name for your identity. Your name will be used for search.
                </SuggestText>
            </LogoSideBox>
            <DividerBox>
                {activeStep === 1 && <BasicInfo/>}
                {activeStep === 2 && <ContactInfo/>}
                {activeStep === 3 && <BloodGroupInfo/>}
                {activeStep === 4 && <WeightInfo/>}
                {activeStep === 5 && <GenderInfo/>}
                {activeStep === 6 && <AddressInfo/>}

                <FormGroup>
                    <AuthButton onClick={nextHandler}>Next</AuthButton>
                </FormGroup>
            </DividerBox>
        </AuthWrapper>
    )
}

export default Register