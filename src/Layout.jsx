
import { Outlet } from "react-router-dom";

import TopMenu from "./componanets/TopMenu";
 import Footer from "./componanets/Footer";

const Layout=()=>{
    return(
        <>
           <TopMenu/>

           <Outlet/>
        
          <Footer/>
           


        </>
    )
}

export default Layout;