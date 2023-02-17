import { Add, Delete, Remove } from '@mui/icons-material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../components/FormatPrice';
import { clearCart, decrementQuantity, incremenQuantity, removeProduct } from '../store/slices/productSlice';
import { DeviceSize } from '../components/Responsive';
import PageNavigation from '../components/PageNavigation';


const Cart = () => {
    const data = useSelector((state) => state.product.productList);
    const dispatch = useDispatch();

    const getTotal = () => {
        let totalPrice = 0;
        data.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };
    const shipping = 300;

    if (data.length === 0) {
        return (
            <Wrapper>
                <div className='empty'>
                    <h1>No Item in Cart</h1>
                    <div className='two-button'>
                        <button className='btn-clear center'><Link to='/'>Continue Shop</Link></button>
                    </div>
                </div>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <PageNavigation />
                <div className='item-header'>
                    <p>Product</p>
                    <p className='hide'>Price</p>
                    <p>Quantity</p>
                    <p className='hide'>Subtotal</p>
                    <p>Remove</p>
                </div>
                <div className='cart-item'>
                    {data.map((item) => {
                        return (
                            <div className='cart-box' key={item.id}>
                                <div className='image-sections'>
                                    <img src={item.img} alt='' />
                                    <h3>{item.name}</h3>
                                </div>
                                <h3 className='hide'><FormatPrice price={item.price} /></h3>
                                <div className='add-to-cart'>
                                    <div className='btn-toggle'>
                                        <button className='add-btn' onClick={() => dispatch(decrementQuantity(item.id))}><Remove /></button>
                                        <span>{item.quantity}</span>
                                        <button className='add-btn' onClick={() => dispatch(incremenQuantity(item.id))}><Add /></button>
                                    </div>
                                </div>
                                <h3 className='hide'><FormatPrice price={item.price * item.quantity} /></h3>
                                <button className='add-btn btn' onClick={() => dispatch(removeProduct(item.id))}>
                                    <Delete />
                                </button>
                            </div>
                        )
                    })}
                </div>
                <div className='two-button'>
                    <button className='btn-clear'><Link to='/'>Continue Shop</Link></button>
                    <button className='btn-clear' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                </div>
                <div className='sub-section-bottom'>
                    <div className='bottom-section'>
                        <ul>
                            <li>SubTotal:</li>
                            <li><FormatPrice price={getTotal() || 0} /></li>
                        </ul>
                        <ul>
                            <li>Shipping:</li>
                            <li><FormatPrice price={shipping || 0} /></li>
                        </ul>
                        <ul>
                            <li>Total:</li>
                            <li><FormatPrice price={shipping + getTotal() || 0} /></li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        )
    };
};
const Wrapper = styled.section`
width: 60vw;
margin: 60px auto;
@media ${DeviceSize.mobile}{
    width: 90%;
    .hide{
        display: none;
    }
}
    .empty{
        text-align: center;
        color: #fff;
        height: 60vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .center{
            margin: 20px auto;
        }
    }
    .item-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        background-color: #353b46;
        padding: 12px 13px;
        border-radius: 7px;
        margin-bottom: 30px;
        p{
            flex: 1;
            text-align: center;
        }
    }
    .item-header p:first-child{
        text-align: left;
    }
    .item-header p:last-child{
        text-align: right;
        flex: 0;
    }
    .cart-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color:#fff;
        padding: 0 13px;
        margin: 20px 0;
        font-weight: 100;
        .image-sections{  
            display: flex;
            align-items: center;
            flex: 1;
            @media ${DeviceSize.mobile}{
                flex-direction: column;
                align-items: flex-start;
            }
            img{
                height: 100px;
                border-radius: 8px;
                border: 1px solid #353b46;
                @media ${DeviceSize.mobile}{
                    height: 80px;
                }
            }
            h3{
                margin-left: 19px;
                font-weight: 100;
                @media ${DeviceSize.mobile}{
                    margin: 5px 0;
                    text-align: left;
                }
            }
        }
        h3{
            font-weight: 100;
            font-size: 16px;
            flex: 1;
            text-align: center;
        }
        .add-to-cart{
            flex: 1;
            display: flex;
            justify-content: center;
            .btn-toggle{
            display: flex;
            align-items: center;
            .add-btn{
                line-height: 0;
                background-color: #353b46;
                color: #fff;
                border: none;
                padding: 5px;
                border-radius: 5px;
                cursor: pointer;
                &:hover{
                    background-color: orange;
                }
            }
            span{
                padding: 0 10px;
            }
        }
        }
        .btn{
            background: none;
            border: none;
            color: #5a6272;
            cursor: pointer;
            margin: 0 15px;
            &:hover{
                color:orange;
            }
        }
    }
    .two-button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #353b46;
        margin-top: 31px;
        padding: 31px 0;
        .btn-clear{
            padding: 10px 32px;
            font-size: 20px;
            border-radius: 50px;
            border: none;
            background-color: #485062;
            color: #98a5c1;
            cursor: pointer;
            a{
                text-decoration: none;
                color:#98a5c1;
                padding: 10px 32px;
                @media ${DeviceSize.mobile}{
                    padding: 10px 0px;
                }
                &:hover{
                    color: #000;
                }
            }
            &:hover{
                background-color: orange;
                    color: #000;
            }
        }
    }
    .sub-section-bottom{
        display: flex;
        justify-content: end;
        @media ${DeviceSize.mobile}{
               justify-content: center;
            }
        .bottom-section{
            width: 38%;
            @media ${DeviceSize.mobile}{
                width: 90%;
            }
            ul{
                list-style: none;
                background-color: #353b46;
                padding: 20px 20px;
                display: flex;
                justify-content: space-between;
                margin: 1px 0;
                li{
                    color: #fff;
                }
            }
        }
    }
`;

export default Cart