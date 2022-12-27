import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Movies from './components/Pages/Movies'
import Series from './components/Pages/Series'
import NavBar from "./components/Navbar/Navbar";
import DetailsView from "./components/Pages/DetailsView";



const MainRouter = () => {


    return (

        <div className="background">
            <NavBar/>
            <Routes>
            <Route
                path="/"
                element={<Series/>}
            />
            <Route
                path="/movies"
                element={<Movies/>}
            />
            <Route
                path="/series"
                element={<Series/>}
            />
            <Route path="/details/:id"
                   element={<DetailsView/>}
                   >
            </Route>
        </Routes>
        </div>
    );
};

export default MainRouter;

