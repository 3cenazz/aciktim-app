
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <SignIn/> */}
        <Routes>
          <Route path="/giriş" exact element={<SignIn />} />
          <Route path="/sepetim" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
