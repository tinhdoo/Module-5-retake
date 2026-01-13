import {Routes, Route} from "react-router-dom";
import './App.css'
import FacilityListComponent from "./components/Facility/FacilityListComponent.jsx";
import AddFacilityComponent from "./components/Facility/AddFacilityComponent.jsx";
import UpdateFacilityComponent from "./components/Facility/UpdateFacilityComponent.jsx";
import HeadComponent from "./components/HeaderComponent.jsx";

function App() {
    return (
        <>
            <HeadComponent/>
        <Routes>
            <Route path="/" element={<FacilityListComponent/>}/>
            <Route path="/facilities" element={<FacilityListComponent/>}/>
            <Route path="/facility/create" element={<AddFacilityComponent/>}/>
            <Route path="/facility/edit/:type/:id" element={<UpdateFacilityComponent/>}/>
        </Routes>
        </>
    )
}

export default App