// library
import React from 'react'
import PropTypes from 'prop-types'

//styles
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: #011765;
    width: ${props => props.width};
    border-radius: 10px;
    padding: ${props => props.padding || '10px'};
    text-align: ${props => props.align || 'center'};
    color: ${props => props.color || "white"};
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.fontSize}
`

export const Button = (props) => {
  return (
    <StyledButton {...props} onClick={props.onSubmit}>
        {/* <img src={props.icon} alt="img" /> */}
        <span className='textOfButton'>
          {props.text}
        </span>
    </StyledButton>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
}