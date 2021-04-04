import styled from "styled-components";

export const Nav = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0 0 20px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

`

export const NavItem = styled.li`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  cursor: pointer;
  text-transform: capitalize;

  svg {
    font-size: 16px;
    color: #C70100;
  }

  &:last-child {
    svg {
      font-size: 22px;
    }
  }
`

export const NavItemNameRateBox = styled.div`
  text-transform: capitalize;
  text-align: right;
`

export const NavItemName = styled.div`
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #000;
`

export const NavItemRated = styled.div`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-weight: 400;
`

export const NavItemAvatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
`