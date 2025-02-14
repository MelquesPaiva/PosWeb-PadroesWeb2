import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import styled from 'styled-components';
import { RestaurantContent } from './components/Restaurants';
import { Paragraph, Title } from './components/TextData';

// styled components
const AppContainer = styled.div`
width: 100vw;
background-image: linear-gradient(90deg, #ffbf95 35%, #fc9856);
`

function App() {
  return (
    <AppContainer>
      <Title color='#FFF'>Menu Vital</Title>
      <Paragraph align='center'>Facilitando escolhas saudáveis para melhorar vidas</Paragraph>
      <RestaurantContent />
      <Login />
      <Register />
    </AppContainer>
  );
}

export default App;
