import styled from 'styled-components';

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`
export const LogoSideBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SuggestText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  text-align: center;
  width: 40%;
  margin: 30px 0 0;
  line-height: 1.8;
`

export const DividerBox = styled.div`
  width: 25%;
  height: 100%;
  padding: 50px 0;
  box-sizing: border-box;
`

export const PortionTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 34px;
  font-weight: bold;
  color: #000000;
  text-transform: capitalize;
  margin-bottom: 30px;
  text-align: center;
`

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
`

export const FormLabel = styled.label`
  width: 100%;
  display: block;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
  color: #4E4E4E;
`

export const FormControlText = styled.input`
  width: 100%;
  display: block;
  padding: 20px 25px;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  background-color: #EDF0F5;
  color: #000000;
  font-size: 18px;
  border-radius: 20px;
  letter-spacing: 1px;
  box-shadow: 2px 2px 5px 1px #E7E7E7;

  &::placeholder {
    color: #9EA0A2;
    font-weight: 400;
  }
`

export const PasswordToggleButton = styled.button`
  border: 0;
  outline: 0;
  color: #C70100;
  background-color: transparent;
  font-size: 20px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
`

export const AuthButton = styled.button`
  width: 100%;
  display: block;
  padding: 20px;
  background-color: #C70100;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  border: 0;
  outline: 0;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgba(199, 1, 0, .8);
  }
`

export const LinkText = styled.span`
  width: 100%;
  display: block;
  text-align: center;
  color: #505050;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
`

export const AccessText = styled.p`
  text-align: center;
  color: #505050;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin-top: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #505050;
  }
`

export const CircleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 50px;
`

export const CircleRadio = styled.button`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  color: #C70100;
  outline: 0;
  border: 1px solid #C70100;
  border-radius: 50%;
  cursor: pointer;
`

export const SquareGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
`

export const SquareRadio = styled.button`
  width: 120px;
  height: 180px;
  background-color: #F6F7F9;
  color: #515252;
  outline: 0;
  border: 0;
  box-shadow: 2px 2px 5px 1px #E7E7E7;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  position: relative;

  svg {
    width: 30px;
    height: 30px;
    fill: #C70100;
    position: absolute;
    top: -10px;
    left: -10px;
  }

`
export const SquareRadioImg = styled.img`
  width: 100%;
`