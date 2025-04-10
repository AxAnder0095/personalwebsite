import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./views/Home.jsx";
import ProgrammingJ from "./views/ProgrammingJ.jsx";
import Home2 from "./views/Home2.jsx";
function App() {


  return (
    <>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home2/>}/>
                    <Route path={'/programming-journey'} element={<ProgrammingJ/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
