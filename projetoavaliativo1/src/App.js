import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import styled from 'styled-components';
import { RestaurantContent } from './components/Restaurants';

// styled components
const AppContainer = styled.div`
width: 100vw;
background-image: linear-gradient(90deg, #ffbf95 35%, #fc9856);
`

function App() {
  return (
    <AppContainer>
      <RestaurantContent />
      <Login />
      <Register />
    </AppContainer>
  );
}

export default App;
