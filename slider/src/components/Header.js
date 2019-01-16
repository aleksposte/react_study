import React, { Component } from 'react';


// bootstrap
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
// styled-components
import styled from 'styled-components'
import Link from './Link'

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 49px;
`

class Header extends React.Component {
    render () {
        return (
            <Row>
                <Col lg={ 12 }>
                    <nav>
                        <List>
                            <Link link='#' text='Вызов Мастера' />
                            <Link link='#' text='Прайс на ремонт' />
                            <Link link='#' text='Наши преимущества' />
                            <Link link='#' text='Схема работы' />
                        </List>
                    </nav>
                </Col>
            </Row>
        )
    }
}

export default Header