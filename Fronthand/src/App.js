
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <SignIn/> */}
        <Cart />
      </BrowserRouter>
    </div>
  );
}

export default App;
