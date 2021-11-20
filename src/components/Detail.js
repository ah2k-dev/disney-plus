import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://i.ibb.co/4wy92TF/up.jpg" />
            </Background>
            <ImageTitle>
                <img src="/images/viewers-pixar.png" />

            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupwatchButton>
                    <img src="/images/group-icon.png" />
                </GroupwatchButton>
            </Controls>
            <Subtitle>
                Dummy text
            </Subtitle>
            <Description>
                sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    position: relative;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    img{
        width: 100%;
        height: 100%;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 50px;
    background: rgba(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover{
        background: rgba(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(249, 249, 249);
    color: rgba(249, 249, 249);
`
const AddButton = styled.button`
    color: white;
    width: 44px;
    height: 44px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right:20px;
    span{
        font-size: 30px;
    }
`
const GroupwatchButton = styled(AddButton)`
    background: rgba(0, 0, 0);
`

const Subtitle = styled.div`
    color: rgba(0, 0, 0);
    font-size:15px;
    min-height: 20px;
    margin-top: 26px;

`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgba(0, 0, 0);
`