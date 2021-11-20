import React from 'react'
import styled from 'styled-components'
function Movies() {
    return (
        <Container>
            <h3>Recommended For You</h3>
            <Content>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`
const Wrap =styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    box-shadow: rgba(0 0 0 / 60%) 0px 26px 30px -10px,
    rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        border-color: white;
        box-shadow: rgba(0 0 0 / 60%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
    }
`