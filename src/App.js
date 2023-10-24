import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage';
import Prova from './page/Prova';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact path='/'
            element={<HomePage />}
          />
          <Route
            path='/prova'
            element={<Prova />}
          />
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
