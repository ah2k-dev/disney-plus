import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Cta>
                <CtaLogo1 src="/images/cta-logo-one.svg" />
                <Signup>GET THE DISNEY BUNDLE</Signup>
                <Description>
                    Get The Disney Bundle to stream the best movies, shows, and sports with Disney+, Hulu, and ESPN+. Terms Apply. Learn more about The Disney Bundle.
                </Description>
                <CtaLogo2 src="/images/cta-logo-two.png" />

            </Cta>
        </Container>
    )
}

export default Login

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    display: flex;
    align-items: top;
    justify-content: center;
    position: relative;
    &:before{
        background-position: top;
        background-image: url("/images/login-background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }
`
const Cta = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

`

const CtaLogo1 = styled.img`

`
const CtaLogo2 = styled.img`
    width: 90%;
`

const Signup = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 20px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transtion: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background-color: #0483ee
    }
`
const Description = styled.p`
    font-size: 12px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`