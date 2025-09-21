import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import CartProvider from "./contexts/CartProvider.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  return (
    <CartProvider>
      <ToastContainer position="bottom-right" newsOnTop={true} autoClose={600} hideProgressBar={true}/>
      <Header/>
      <Products/>
    </CartProvider>
  )
}

export default App;
