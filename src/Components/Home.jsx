import {Home2} from "./Home2"
// import {Home1} from "./Home1"
import Navbar from "./Navbar"


// const Home = () => {
//     return(
//         <>
//         {/* <Navbar/> */}
//         <Home2/>
//         </>
//     )
// }
// export{Home}

export default function Home() {
    return (
      <div>
       <Navbar/>
       {/* <Home1/> */}
       <Home2/>
      </div>
    );
  }
  

  