import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CountryList from '../../components/CountryList/CountryList'

const CountryDetails = () => {
    const {name, alpha3Code} = useParams() 
    const [country, setCountry] = useState()

    const getCountry = () => {
        axios
            .get(`https://restcountries.com/v2/name/${name}`)
            .then((response) => {
                setCountry(response.data[0])
                // console.log(response.data[0])
            })
    }

    useEffect(() => {
        getCountry()
    }, [])

    // const getCountryAlpha = () => {
    //     axios
    //         .get(`https://restcountries.com/v2/all/${alpha3Code}`)
    //         .then((response) => {
    //             setCountry(response.data[0])
    //             // console.log(response.data[0])
    //         })
    // }

    // useEffect(() => {
    //     getCountryAlpha()
    // }, [])


  return (
    <div>CountryDetails
        { 
        country ? (
            <div>
                <Link to="/country-list" element={<CountryList />}>
                <button >Previous</button>
                </Link>
                <img src={country.flag} alt={country.name} />
                <ul>
                <li>Name: {country.name}</li>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Population: {country.population}</li>
                <li>Area(Km): {country.area} </li>
                <li>Borders:  {Array.isArray(country.borders) && country.borders.length ? country.borders.map((border) => <Link to={`/countries/${border}`}><div> {border}</div></Link>): null}</li>
                <li>Currencies: {country.currencies.map(currency => <div>{currency.name} ({currency.symbol})</div>)}</li>
                <li>Languages: {country.languages.map(language => <div>{language.name} </div>)}</li>
                </ul>
            </div>
       ) :null}
    </div>
  )
}

export default CountryDetails