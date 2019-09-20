import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UsersList  from './Components/UsersList';
import AppHeader from './Components/AppHeader';

const GlobalStyle = createGlobalStyle `
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat';
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const SyledWrapper = styled.div `
  height: 100vh;
  background: #FEBF28;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <SyledWrapper>
        <AppHeader/>
        <UsersList/>
      </SyledWrapper>
    </div>
  );
}

export default App;
