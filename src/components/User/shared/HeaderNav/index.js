import React, {useEffect, useState} from "react";
import {Nav, NavItem, NavItemAvatar, NavItemName, NavItemNameRateBox, NavItemRated} from "./styled";
import AvatarImg from './../../../../assets/images/male.png'
import {FaArrowLeft, FaEllipsisV} from 'react-icons/fa'
import {useHistory} from "react-router-dom";

const HeaderNav = () => {
    const history = useHistory()

    const [pageName, setPageName] = useState('');

    useEffect(() => {
        let name = history.location.pathname
        name = name.replace('/', '')
        setPageName(name)
    }, [history.location.pathname])

    return (
        <Nav>
            <NavItem>
                <FaArrowLeft/> {pageName}
            </NavItem>

            <NavItem>
                <NavItemNameRateBox>
                    <NavItemName>John Doe</NavItemName>
                    <NavItemRated>Top Rated Donor</NavItemRated>
                </NavItemNameRateBox>

                <NavItemAvatar src={AvatarImg}/>

                <FaEllipsisV/>
            </NavItem>
        </Nav>
    )
}

export default HeaderNav