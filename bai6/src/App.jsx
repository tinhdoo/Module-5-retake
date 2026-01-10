import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponent from "./component/ListComponent.jsx";
import AddVehicleComponent from "./component/AddVehicleComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent.jsx";
import FooterComponent from "./component/FooterComponent.jsx";
import HomeComponent from "./component/HomeComponent.jsx";
import DetailComponent from "./component/DetailComponent.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path={"/"} element={<HomeComponent/>}/>
                    <Route path = "/vehicle-list" element = {<ListComponent/>}/>
                    <Route path = "/add-vehicle" element = {<AddVehicleComponent/>}/>
                    <Route path = "/detail/:id" element = {<DetailComponent/>}/>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    )
}

export default App
