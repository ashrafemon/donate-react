import React, {useEffect, useState} from "react";
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
import {
    dispatchResetRegister,
    dispatchToggleMessage,
    fetchBloodGroups,
    register
} from "../../../store/actions/auth/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Register = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const suggestedText = useSelector(state => state.auth.suggestedText)
    const {registered} = useSelector(state => state.auth.register)

    const [activeStep, setActiveStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        alternate_phone: '',
        social_link: '',
        blood_group: '',
        weight: '',
        gender: '',
        street_address: '',
        city: '',
        post_code: '',
        dob: '',
        age: '',
        avatar: ''
    })

    console.log(registered)

    useEffect(() => {
        dispatch(fetchBloodGroups())
    }, [dispatch])

    useEffect(() => {
        if (registered === true) {
            history.replace('/login')
            dispatch(dispatchResetRegister({
                status: '',
                registered: false
            }))
        }
        // eslint-disable-next-line
    }, [registered])

    const validateMessage = () => {
        dispatch(dispatchToggleMessage({
            show: true,
            type: 'danger',
            text: 'Please fill up the required field *'
        }))
    }

    const nextTabHandler = () => {
        if (activeStep === 1) {
            if (formData.name === '' || formData.email === '' || formData.password === '' || formData.password.length < 6) {
                return validateMessage()
            }
        } else if (activeStep === 2) {
            if (formData.phone === '' || formData.alternate_phone === '') {
                return validateMessage()
            }
        } else if (activeStep === 3) {
            if (formData.blood_group === '') {
                return validateMessage()
            }
        } else if (activeStep === 4) {
            if (formData.weight === '') {
                return validateMessage()
            }
        } else if (activeStep === 5) {
            if (formData.gender === '') {
                return validateMessage()
            }
        } else if (activeStep === 6) {
            if (formData.street_address === '' || formData.city === '' || formData.post_code === '') {
                return validateMessage()
            }
        } else if (activeStep === 7) {
            if (formData.age === '' || formData.dob === '') {
                return validateMessage()
            }
        }

        activeStep <= 8
            ? setActiveStep(activeStep + 1)
            : console.log('Sorry')
    }
    const fieldChangeHandler = (value, item) => {
        setFormData({
            ...formData,
            [item]: value
        })
    }
    const submitHandler = () => {
        if (activeStep === 8) {
            if (formData.avatar === '') {
                return dispatch(dispatchToggleMessage({
                    show: true,
                    type: 'danger',
                    text: 'Please upload your photo'
                }))
            }
        }

        dispatch(register(formData))
    }

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
                {activeStep === 1 && <BasicInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 2 && <ContactInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 3 && <BloodGroupInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 4 && <WeightInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 5 && <GenderInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 6 && <AddressInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 7 && <AgeInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}
                {activeStep === 8 && <PhotoInfo
                    formData={formData}
                    handler={fieldChangeHandler}
                />}

                <FormGroup>
                    {activeStep < 8
                        ? <AuthButton type="button" onClick={nextTabHandler}>Next</AuthButton>
                        : <AuthButton type="button" onClick={submitHandler}>Start Journey</AuthButton>
                    }
                </FormGroup>
            </DividerBox>
        </AuthWrapper>
    )
}

export default Register