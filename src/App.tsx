import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";


export default function App() {

  return(
    <>
      <Header/>
      <Outlet/>   
      <Footer/>   
    </>
  )
}