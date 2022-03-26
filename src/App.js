import styled, { createGlobalStyle } from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import MetamaskWallet from './components/MetamaskWallet';
import KaikasWallet from './components/KaikasWallet';

const GlobalStyle = createGlobalStyle`
  body{
    background-color:black;
    color:white;
  }
`

const StyledContainer = styled(Container)`
  position:absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%);
`

function App() {

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <Row>
          <MetamaskWallet/>
          <KaikasWallet/>
        </Row>
      </StyledContainer>
    </>
  );
}

export default App;
