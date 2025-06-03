import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router';
import './assets/css/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <>
      <div id="App">
          <Container className="py-2">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
            </Routes>

          </Container>
        </div>
    </>
  )
}

export default App
