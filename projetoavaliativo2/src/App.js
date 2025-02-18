import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import styled from 'styled-components';
import { RestaurantContent } from './components/Restaurants';
import { Paragraph, Title } from './components/TextData';
import { Header } from './components/Header';

// styled components
const AppContainer = styled.div`
width: 100vw;
background-image: linear-gradient(90deg, #ffbf95 35%, #fc9856);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <RestaurantContent />
      <Login />
      <Register />
    </AppContainer>
  );
}

export default App;
