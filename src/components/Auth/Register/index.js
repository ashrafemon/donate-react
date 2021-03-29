import React, {useState} from "react";
import {AuthButton, AuthWrapper, DividerBox, FormGroup, LogoSideBox, SuggestText} from "../styled";
import Logo from "../../shared/Logo";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import BloodGroupInfo from "./BloodGroupInfo";
import WeightInfo from "./WeightInfo";
import GenderInfo from "./GenderInfo";
import AddressInfo from "./AddressInfo";
import AgeInfo from "./AgeInfo";
import PhotoInfo from "./PhotoInfo";

const Register = () => {
    const [activeStep, setActiveStep] = useState(1)
    const nextHandler = () => {
        activeStep < 8
            ? setActiveStep(activeStep + 1)
            : console.log('Sorry')
    }

    const [suggestedText] = useState({
        basic: 'Provide your real name for your identity. Your name will be used for search.',
        contact: 'Please provide correct phone no. This information will keep safe.',
        blood: 'Your blood group need to be accurate. If you don\'t know about it please contact nearest clinic.',
        weight: 'Note: you can not donate blood if you\'re under weight. Minimum weight for donation required 50KG',
        gender: 'Defining your gender will let us know bring new features for mothers health care.',
        address: 'Please provide correct address. This information will keep safe.',
        age: 'Correct birthdate give you best experience with the community. Don\'t hide it.',
        photo: 'Please do not use a model or doll avatar. Please keep faith on yourself you\'re beautiful too.'
    })

    return (
        <AuthWrapper>
            <LogoSideBox>
                <Logo/>
                <SuggestText>
                    {activeStep === 1 && suggestedText.basic}
                    {activeStep === 2 && suggestedText.contact}
                    {activeStep === 3 && suggestedText.blood}
                    {activeStep === 4 && suggestedText.weight}
                    {activeStep === 5 && suggestedText.gender}
                    {activeStep === 6 && suggestedText.address}
                    {activeStep === 7 && suggestedText.age}
                    {activeStep === 8 && suggestedText.photo}
                </SuggestText>
            </LogoSideBox>
            <DividerBox>
                {activeStep === 1 && <BasicInfo/>}
                {activeStep === 2 && <ContactInfo/>}
                {activeStep === 3 && <BloodGroupInfo/>}
                {activeStep === 4 && <WeightInfo/>}
                {activeStep === 5 && <GenderInfo/>}
                {activeStep === 6 && <AddressInfo/>}
                {activeStep === 7 && <AgeInfo/>}
                {activeStep === 8 && <PhotoInfo/>}

                <FormGroup>
                    {activeStep < 8
                        ? <AuthButton onClick={nextHandler}>Next</AuthButton>
                        : <AuthButton onClick={nextHandler}>Start Journey</AuthButton>
                    }
                </FormGroup>
            </DividerBox>
        </AuthWrapper>
    )
}

export default Register