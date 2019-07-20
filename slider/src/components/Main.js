import React, { Component } from 'react';

// bootstrap
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
// styled-components
import styled from 'styled-components'
import Slider from './Slider';


const Repair = styled.div`
    color: #fff;
    font-size: 40px;
    font-weight: 700:
    line-height: 50px;

    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`
const LightText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 700:
    line-height: 50px;
    margin-top: 54px;
`

const CallBtn = styled.button`
    widht: 247px;
    height: 67px;
    margin: 32px;
    background-color: #ffa14b;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
`


class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={ 5 }>
                    <Repair>
                        Качественный ремонт
                        <span>
                            iphone за 35 минут и гарантия 1 год
                        </span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди, 
                        и получите бесплатную диагостику без очереди, защитное стекло.
                    </LightText>
                    <CallBtn>
                        Отправить заявку!
                    </CallBtn>    
                </Col>
                <Col lg={ 6 } lgOffset={ 1 }>
                    <Slider />
                </Col>
            </Row>
        )
    }
}

export default Main