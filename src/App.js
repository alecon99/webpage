import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage';
import Products from './page/Products';



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
            path='/products'
            element={<Products />}
          />
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
