import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { DeviceSize } from '../components/Responsive';


const Footer = () => {
  return (
    <Wrapper>
        <p>© 2023 eTrade</p>
        <div className='icon-section'>
            <div className='icon'>
            <Twitter />
            </div>
            <div className='icon'>
            <GitHub />
            </div>
            <div className='icon'>
            <LinkedIn />
            </div>
        </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
width: 60vw;
margin: 0 auto;
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid #fff;
padding-top: 20px;
@media ${DeviceSize.mobile}{
    width: 90vw;
}
.icon-section{
    display: flex;
}
.icon{
    margin: 0 10px;
}
`;

export default Footer