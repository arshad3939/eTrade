import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
margin: 10px 0;
color: #fff;
a{
    color: #ffffffb2;
    text-decoration: none;
    &:hover{
        color:orange
    }
}
`;

const PageNavigation = () => {
  return (
    <Wrapper>
        <Link to='/'>Home</Link> / Cart
    </Wrapper>
  )
}

export default PageNavigation