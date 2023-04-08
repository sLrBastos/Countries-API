import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CountryDetails = () => {
    const {name} = useParams() 
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

  return (
    <div>CountryDetails
        { country ? (
            <div>
                {/* {console.log(country.borders.map((border, index) => <div> {border}</div>))} */}
                <img src={country.flag} alt={country.name} />
                <ul>
                <li>Name: {country.name}</li>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Population: {country.population}</li>
                <li>Area(Km): {country.area} </li>
                <li>Borders:  {country.borders.map((border) => <Link to={`/countries/${country.name}`}><div> {border}</div></Link>)}</li>
                <li>Currencies: {country.currencies.map(currency => <div>{currency.name} ({currency.symbol})</div>)}</li>
                <li>Languages: {country.languages.map(language => <div>{language.name} </div>)}</li>
                </ul>
            </div>
       ) :null}
    </div>
  )
}

export default CountryDetails