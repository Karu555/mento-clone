
import './App.css';
import  {Home2}  from "./Components/Home2";
import {Navbar} from "./Components/Navbar";
import {Product} from "./Components/Product"
import {BrowserRouter, Routes,route, Route} from "react-router-dom"



function App() {
  return (
    <div className="App">
    {/* <Navbar/>
     <Home2/>
     <Product/> */}
     <BrowserRouter>
     <Routes>
       <Route path={"/"} exact element={<Home2/>}></Route>
       <Route path={"/product"} exact element={<Product/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
