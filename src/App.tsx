import { Suspense } from "react";
import Technologies from "./components/Technologies/Technologies"
import type { Itechnology } from "./Type/Technology";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const technologypromise = async():Promise<Itechnology[]> => {
  const res = await fetch("./Data.json");
  const data = await res.json();
  return data;
}

function App() {

  return (
    <>
    <NavBar/>
    <Banner/>
    <Suspense fallback={<h2>Loading............</h2>}>
    <Technologies
      technologypromise={technologypromise()}
    
    />
    </Suspense>
    <Footer/>
    <ToastContainer />


    


    </>
  )
}

export default App
