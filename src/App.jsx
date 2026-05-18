import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter basename="/site-react">
      <CartContextProvider> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;