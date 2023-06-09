import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Country from '../Country/Country'
import SearchBar from './../SearchBar/SearchBar';
import CountryContext from "../../contexts/CountriesContext"

const CountryList = () => {
    
    const [select, setSelect] = useState("")
    const [search, setSearch] = useState("")

    const {countries, setCountries} = useContext(CountryContext)


    const selectCountry = () => {
        axios
            .get(`https://restcountries.com/v2/all/${select}`)
            .then((response) => {
                setCountries(response.data)
                // console.log(response.data)
            }) 
            
    }

    useEffect(() => {
        selectCountry()
    }, [select])

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }



    const searchCountry = () => {
        axios
        .get(`https://restcountries.com/v2/all/${search}`)
            .then((response) => {
                setCountries(response.data)
            })    
    }

    useEffect(() => {
        searchCountry()
    }, [search, searchCountry])

    const handleChange = (event) => {
        setSearch(event.target.value);
        setSelect(event.target.value)
      };



  return (
    <div>CountryList
        <SearchBar  search={search} handleChange={handleChange}/> 
        <select name="country" id="country" onChange={handleSelect}> 
            <option> Choose a country</option>
        {countries 
            ? countries.map((country, index) => (
               
                    <option key={index} value={country.name}> {country.name}</option>
                
            ))
            :null}
        </select>
        {select !== "Choose a country"
        ? countries.map((country, index) => (
            select === country.name ?
            <div key={index}>
                <Country country={country} /> 
            </div>
            : null
        ))    
        :null} 
        { countries 
            ? countries.map((country,index) => (
                search === country.capital ?
                <div key={index}>
                <Country country={country} /> 
            </div>
            : null

            ))
            
            
            : null
        }

    </div>
  )
}

export default CountryList