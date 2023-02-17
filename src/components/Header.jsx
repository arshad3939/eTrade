import { Person, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo (1).png';


const Header = () => {
  const data = useSelector((state)=>state.product.productList);
  // console.log(data.product.productList.quantity)
  const getTotalQuantity = () => {
    let total = 0
    data.forEach(item => {
      total += item.quantity
    })
    return total
  }
  return (
    <Wrapper>
      <div className='topHeader'></div>
      <div className='bottomHeader'>
        <span className='logo'>
          <Link to='/'>
          <img src={logo} alt='' style={{}}/>
          </Link>
        </span>
        {/* <nav>
          <Link to='/'>Home</Link>
          <Link to='/product'>Product</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
        </nav> */}
        <div className='icons-cart'>
          <div className='icon'>
          <Link to='/cart'>
          <Badge badgeContent={getTotalQuantity() || 0} color="warning" >
            <ShoppingCart />
            </Badge>
            </Link>
          </div>
          <div className='icon'>
            <Person />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin: 20px 20px;

  .bottomHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 12px;
    a{
      text-decoration:none;
      padding: 10px 20px;  
      color: #d6d2d2;
    }
    a:hover{
      color:orange;
    }


    .icons-cart{
      display: flex;
      align-items: center;
      justify-content: space-between;
        .icon{
          margin: 0 20px;
          color: #d6d2d2;
        }
    }
    .icons-cart .icon:nth-child(2){
      margin: 0 !important;
    }
  }
`;

export default Header