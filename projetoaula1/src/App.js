import Header from './components/Header'
import styled from 'styled-components'
import Search from './components/Search';
import LatestReleases from './components/LatestReleases';
import RecommendationCard from './components/RecommendationCard';
import bookImage from './images/livro2.jpeg'

// styled components
const AppContainer = styled.div`
width: 100vw;
height: 100vw;
background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <LatestReleases />
      <RecommendationCard
                title="Talvez você se interesse por..."
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google"
                image={bookImage}/>
    </AppContainer>
  );
}

export default App;
