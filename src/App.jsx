
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Cart from "./components/page/cart/Cart";
import ItemListContainer from "./components/page/itemList/ItemListContainer";
import CartContextProvider from "./components/context/CartContext";
import CheckoutContainer from "./components/page/checkout/CheckoutContainer";
import DashBoard from "./components/page/dashBoard/DashBoard";

function App() {

  return (

    <BrowserRouter>
      <CartContextProvider>

        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/Details/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Category/:categoryName" element={<ItemListContainer />}></Route>
            <Route path="/CheckoutContainer" element={<CheckoutContainer />}></Route>
            <Route path="/DashBoard" element={<DashBoard />}></Route>

          </Route>
        </Routes>

      </CartContextProvider>
    </BrowserRouter>


  )
}
export default App;

