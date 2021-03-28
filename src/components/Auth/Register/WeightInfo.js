import React from "react";
import {PortionTitle, SquareGroup, SquareRadio, SquareRadioImg} from "../styled";
import WeightImage from './../../../assets/images/weight.png'
import {FaArrowAltCircleUp, FaArrowAltCircleDown} from 'react-icons/fa'

const WeightInfo = () => {
    return (
        <>
            <PortionTitle style={{textAlign: 'left'}}>How Much Do <br/> Your Weight</PortionTitle>

            <SquareGroup>
                <SquareRadio>
                    <FaArrowAltCircleUp />
                    <SquareRadioImg src={WeightImage} alt="Weight"/>
                    <span>&lt; 50 KG</span>
                </SquareRadio>
                <SquareRadio>
                    <FaArrowAltCircleDown />
                    <SquareRadioImg src={WeightImage} alt="Weight"/>
                    <span>&gt; 50 KG</span>
                </SquareRadio>
            </SquareGroup>

        </>
    )
}

export default WeightInfo