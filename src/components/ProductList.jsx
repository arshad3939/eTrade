import React, { useRef } from 'react';
import styled from 'styled-components';
import { addProduct } from '../store/slices/productSlice';
import { data } from '../data';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import FormatPrice from './FormatPrice';
import { DeviceSize, HamSize } from './Responsive';
import { useInView } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';


// for mobile effect transform effect
const Section = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
    if (useMediaQuery({ maxWidth: '768px' })) {
        return (
            <Container ref={ref}>
                <div className='three' style={{
                    transform: isInView ? "scale(1.1)" : "scale(0.9)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}>
                    {children}
                </div>
            </Container>
        )
    } else {
        return <section>
            {children}
        </section>
    }
};
const Container = styled.div`
    width: 96%;
    display: block;
    margin: 30px auto;
`;
// end mobile effect and use Section Component

const ProductList = () => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <div className='three-box'>
                {data.map((item) =>
                (
                    <div className="box" key={item.id} >
                        <Section>
                            <div className='image-section'>
                                <img src={item.img} alt='' />
                            </div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <h4><FormatPrice price={item.price} /></h4>
                            <button className='cart-btn btn' onClick={() => dispatch(addProduct(item))}><Link to='/cart'>Add to Cart</Link></button>
                        </Section>
                    </div>
                )
                )}
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
width: 60vw;
margin: 0 auto;
@media ${DeviceSize.mobile}{
    width: 100%;
}
.three-box{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    .box{
        text-align: center;
        width: 30%;
        margin: 40px 10px;
        padding: 20px 10px;
        transform: scale(.9);
        transition: all .3s ease-in-out;
        cursor: pointer;
        margin-bottom: 50px;

        .image-section{  
            margin-top: -8vh ;
            img{
                height: 290px;
            }
        }
        h3{
            color: #fff;
            font-size: 22px;
            margin: 20px 0;
        }
        p{
            color: #d6d2d2;  
            height: 52px;          
        }
        h4{
            color: orange;
            font-size: 26px;
            font-weight: 200;
            margin: 20px 0;
        }
        .cart-btn{
            padding: 10px 32px;
            font-size: 20px;
            border-radius: 50px;
            border: none;
            background-color: #485062;
            color: #98a5c1;
            cursor: pointer;
            a{
                text-decoration: none;
                color: #98a5c1;
            }
        }
        &:hover{
            transform: scale(1.2);
            background-color: #3c43509e;
            border-radius: 12px;
            .btn {
                background-color: orange;
                color: #000;
            }
            a{
                color: #000;
            }
        }
    }
    @media ${DeviceSize.mobile}{
        display: flex;
        flex-direction: column;
        .box{
            width: 100%;
            margin: 40px 0;
            &:hover{
                transform: scale(0.9);
            }
        }
        .three-box{
            .box-on-mobile{
            transform: scale(1);
        }
        }
    }
}
`;

export default ProductList