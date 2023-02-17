import React from 'react';
import styled from 'styled-components';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <Wrapper>
      <Slider />
      <ProductList />
    </Wrapper>
  )
};

const Wrapper = styled.section`
`;

export default Home