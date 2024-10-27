
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import lock_banner from './Components/Assets/lock_banner.jpeg'
import tool_banner from './Components/Assets/tool_banner.jpeg'
import accesory_banner from './Components/Assets/accesory_banner.jpeg'
 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/lock' element={<ShopCategory banner={lock_banner} category="lock"/>}/>
        <Route path='/tool' element={<ShopCategory banner={tool_banner} category="tool"/>}/>
        <Route path='/accesory' element={<ShopCategory banner={accesory_banner} category="accesory"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
