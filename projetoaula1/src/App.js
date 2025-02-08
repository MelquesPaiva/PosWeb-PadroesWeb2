import Header from './components/Header'
import styled from 'styled-components'
import Search from './components/Search';
import LatestReleases from './components/LatestReleases';

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
    </AppContainer>
  );
}

export default App;
