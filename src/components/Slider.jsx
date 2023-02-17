import React from 'react';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform,  } from 'framer-motion';
import { DeviceSize } from './Responsive';


const Slider = () => {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0])


    return (
        <Wrapper>
            <div className='hero'>
                <motion.div className="container card-container" style={{ scale }}  viewport={{ once: false, amount: 0.8 }}>
                    <motion.div className="item" style={{ scaleY: scrollYProgress }}  />
                        <h1>Etrade</h1>
                </motion.div>
                <div className='text-animetion'>
                    <ul>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>
                        <li>Shop the world’s best selection of headphones</li>

                    </ul>
                </div>
            </div>
        </Wrapper>
    )
};
const Wrapper = styled.section`
    width: 100%;
    .hero{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 40px 0;
        .container {
            .item{
            width: inherit;
            height: inherit;
            transform-origin: 50% 100%;
        }
        }
        h1{
            font-size: 22vw;
            text-transform: uppercase;
            font-weight: 600;
            position: relative;
            color: #fff;
        }
        .text-animetion{
            overflow: hidden;
            position: absolute;
            transform: rotate(-3deg) perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(-3deg) rotateX(0deg) rotateY(0deg) translateZ(0px);
            box-shadow: 1px 1px 15px 0px #00000069;
            z-index: 1;
            ul{
                list-style: none;
                display: -webkit-inline-box;
                overflow-x: hidden;
                width: 100%;
                background-color: yellow;
                padding: 5px 0;
                li{
                    padding: 0 7px;
                    animation: slide-left 8s infinite linear ;
                    transition: all 2s ease;
                    font-size: 18px;
                }
            }
            @keyframes slide-left {
                        from {
                            -webkit-transform: translateX(0);
                                    transform: translateX(0);
                        }
                        to {
                            -webkit-transform: translateX(-100%);
                                    transform: translateX(-100%);
                        }
                    }
            @media ${DeviceSize.mobile}{
                box-shadow: none;
                width: 100%;
                ul{
                    padding: 0;
                    li{
                        font-size: 12px;
                    }
                }                
            }
        }
    }
`;

export default Slider