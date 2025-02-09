import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import styled from 'styled-components';

// styled components
const AppContainer = styled.div`
width: 100vw;
height: 100vw;
background-image: linear-gradient(90deg, #ffbf95 35%, #fc9856);
`

function App() {
  return (
    <AppContainer>
      <Login />
      <Register />
    </AppContainer>
  );
}

export default App;
