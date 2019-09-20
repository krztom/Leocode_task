import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div `
  display: flex;
  justify-content: center;
  position: relative;
`;

const H1 = styled.h1 `
    font-weight: 800;
    font-size: 46px;
`


const AppHeader = (props) => {
    return ( 
        <HeaderWrapper>
            <H1>Users List</H1>
        </HeaderWrapper>
     );
}
 
export default AppHeader;