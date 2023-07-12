
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/page/itemList/itemListContainer";
import ItemDetailContainer from "./components/page/itemDetail/ItemDetailContainer";
import Layout from "./components/layout/Layout";
import Cart from "./components/page/cart/Cart";

function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>

          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/Details/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>

          <Route path="/Category/:categoryName" element={<ItemListContainer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>


  )
}
export default App;

