import React from "react";
import {CircleGroup, CircleRadio, PortionTitle} from "../styled";

const BloodGroupInfo = () => {

    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>What is Your <br/> Blood Group</PortionTitle>

            <CircleGroup>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
                <CircleRadio>A+</CircleRadio>
            </CircleGroup>

        </>
    )
}

export default BloodGroupInfo