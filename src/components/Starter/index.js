import React from "react";
import {Container, JourneyButton} from "./styled";
import Logo from "../shared/Logo";

const Starter = () => {
    return (
        <Container>
            <Logo/>
            <JourneyButton>Start Journey</JourneyButton>
        </Container>
    )
}

export default Starter