import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import Rings from "./pages/Rings";
import Service from "./pages/service";
import Earing from "./pages/Earing";
import Bengles from "./pages/Bengles";
import Products from "./pages/Products";
import BestOffer from "./pages/BestOffer";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import Premium from "./pages/Premium jewellary";
import Blog from "./pages/Blog";

import PaymentDone from "./pages/PaymentDone";
import CheckOut from "./pages/checkOut";


const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
 
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="Products" element={<Products/>}/>
<Route path="service" element={<Service/>}/>
<Route path="offer" element={<BestOffer/>}/>
<Route path="shop" element={<Shop/>}/>
<Route path="searchproduct/:txtdata" element={<Search/>}/>
<Route path="premium" element={<Premium/>}/>
<Route path="rings" element={<Rings/>}/>
        <Route path="earings" element={<Earing/>}/>
        <Route path="bengles" element={<Bengles/>}/>
       
<Route path="blog" element={<Blog/>}/>
<Route path="mycart" element={<MyCart/>}/>
 <Route path="checkout" element={<CheckOut/>}/>
<Route path="paydone" element={<PaymentDone/>} />
        

       </Route>

   
      </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App;