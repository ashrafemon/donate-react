import React from "react";
import {PortionTitle, SquareGroup, SquareRadio, SquareRadioImg} from "../styled";
import MaleImage from './../../../assets/images/male.png'
import FeMaleImage from './../../../assets/images/female.png'

const GenderInfo = () => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>How Much Do <br/> Your Weight</PortionTitle>

            <SquareGroup>
                <SquareRadio>
                    <SquareRadioImg src={MaleImage} alt="Male"/>
                    <span>Male</span>
                </SquareRadio>
                <SquareRadio>
                    <SquareRadioImg src={FeMaleImage} alt="Female"/>
                    <span>Female</span>
                </SquareRadio>
            </SquareGroup>

        </>
    )
}

export default GenderInfo