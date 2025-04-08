import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./views/Home.jsx";
import ProgrammingJ from "./views/ProgrammingJ.jsx";
function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'}>
                    <Route index element={<Home/>}/>
                    <Route path={'/programming-journey'} element={<ProgrammingJ/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
