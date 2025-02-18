import styled from 'styled-components'
import { FavoritesList } from '../components/Favorites';
// styled components
const AppContainer = styled.div`
height: 100vw;
background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favorites() {
  return (
    <AppContainer>
      <FavoritesList />
    </AppContainer>
  );
}

export default Favorites;
