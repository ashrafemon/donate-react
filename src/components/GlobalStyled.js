import styled from "styled-components";

export const ToastMessage = styled.div`
  width: 300px;
  min-height: 34px;
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
  background-color: ${props => props.type === 'danger' ? '#C70100' : '#5cb85c'};
  color: #ffffff;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: justify;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  border-radius: 3px;
  box-shadow: 3px 3px 8px ${props => props.type === 'danger' ? '#C70100' : '#5cb85c'};

  svg {
    position: absolute;
    top: 10px;
    right: 5px;
    color: #ffffff;
    cursor: pointer;
  }
`