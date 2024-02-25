import React from 'react'
import Styled from 'styled-components'
function Button(props) {
    console.log(props.f)
    const StyledButton = Styled.button`
        width:45%;
        padding:6px;
        // background-color:#e47200;
        background-color: ${props.color};
        border:none;
        color:white;
        font-weight:bold;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
        font-size:20px;
        border-radius: 10px;
        margin-bottom:20px;
        &:hover{
            cursor:pointer;
        }
    `;
    
  return (
    <StyledButton onClick={props.f}>
        {props.name}
    </StyledButton>
  )
}

export default Button