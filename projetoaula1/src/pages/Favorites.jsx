import styled from 'styled-components'
import Search from '../components/Search';
import RecommendationCard from '../components/RecommendationCard';
import bookImage from './../images/livro2.jpeg'

// styled components
const AppContainer = styled.div`
width: 100vw;
height: 100vw;
background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Favorites() {
  return (
    <AppContainer>
      <Search />
    </AppContainer>
  );
}

export default Favorites;
