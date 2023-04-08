import React from 'react'
import { Routes, Route } from "react-router-dom";
import CountryDetails from '../CountryDetails/CountryDetails'
import CountryList from "../.././components/CountryList/CountryList";

const Main = () => {
  return (
    <div>
        <Routes>
            <Route path="/country-list" element={<CountryList />}/>
            <Route path="/countries/:name" element={<CountryDetails />}/>
            <Route path="/countries/:border" element={<CountryDetails />}/>
        </Routes>
    </div>
  )
}

export default Main