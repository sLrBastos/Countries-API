import React from 'react'
import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const CountryContext = createContext()

export default CountryContext

export const CountryContextProvider = ({ children }) => {

    const [countries, setCountries] = useState([])

    const getCountries = () => {
        axios 
            .get(`https://restcountries.com/v2/all`)
            .then((response) => setCountries(response.data)) 
                // console.log(response.data))
       
    }

    useEffect(() => {
        getCountries()
    }, [])

  return (
    <CountryContext.Provider value = {{countries, setCountries}}>
        {children}
    </CountryContext.Provider>
  )
}

