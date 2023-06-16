import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import CartDetails from './components/CartDetails';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CartDetails />} />
      </Routes>
    </div>
  );
}

export default App;
