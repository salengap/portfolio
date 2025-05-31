import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import './assets/css/App.css';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <div id="App">
          <Navigation/>

          <Container className="py-2">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
            </Routes>

          </Container>
        </div>
    </>
  )
}

export default App
