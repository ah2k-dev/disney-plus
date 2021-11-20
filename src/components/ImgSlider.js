import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick/lib/slider'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (

        <div>
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/slider-badging.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scale.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scales.jpg" />
                </Wrap>
            </Carousel>
        </div>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before{
            font-size:10px;
            color: rgba(150, 158, 171);
        }
    }
    li.slick-active button::before {
        color: white;
    }
    .slick-list {
        overflow: visible;
    }
`
const Wrap = styled.div`
    img{
        cursor: pointer;
        border: 4px solid transparent;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: rgba(0 0 0 / 60%) 0px 26px 30px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`