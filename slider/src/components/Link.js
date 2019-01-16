import React, { Component } from 'react';
// styled-components
import styled from 'styled-components'

const StyledLink = styled.a`
    font-size: 14px;
    color: #{ props => props.active ? 'pink' : '#fff' };
    line-height: 24px;
    text-align: right;
    position: absolute;
    padding-right: 34px;
    border-right: 1px dotted #fff;

    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }

    &last-child: {
        border-right: none;
    }
`

class Link extends React.Component {
    render () {
        return (
            <StyledLink href={ this.props.link }> { this.props.text } </StyledLink>
        )
    }
}

export default Link