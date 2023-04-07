import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'

const CountryDetails = () => {
    const {name} = useParams() 
    const [country, setCountry] = useState()

    const getCountry = () => {
        axios
            .get(`https://restcountries.com/v2/name/${name}`)
            .then((response) => {
                setCountry(response.data)
                // console.log(response.data)
            })
    }

    useEffect(() => {
        getCountry()
    }, [])

  return (
    <div>CountryDetails
        { country ? (
            <div>
                <img src={country.flag} alt={country.name} />
                <ul>
                <li>Name: {country.name}</li>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Population: {country.population}</li>
                <li>Area(Km): {country.area} </li>
                <li>Borders: {country.borders + " "}</li>
                <li>Currencies: {country.currencies.map(currency => <div>{currency.name} ({currency.symbol})</div>)}</li>
                <li>Languages: { country.languages.map(language => <div>{language.name} </div>)}</li>
                </ul>
            </div>
       ) :null}
    </div>
  )
}

export default CountryDetails