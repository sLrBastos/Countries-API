import React from 'react'
import { Link } from 'react-router-dom'

const Country = ({country}) => {

  const {alpha3Code, name, flag, capital, region, population, area, borders,currencies,languages} = country

  return (
    <div>Country
        <Link to={`/countries/${country.name}`}>
        <img src={flag} alt={name} />
        </Link>
        <ul>
          <li>Name: {name}</li>
          <li>Capital: {capital}</li>
          <li>Region: {region}</li>
          {/* <li>Population: {population}</li>
          <li>Area(Km): {area} </li>
          <li>Borders: {borders + ("")}</li> */}
          {/* <li>Currencies: {currencies.map(currency => <div>{currency.name} ({currency.symbol})</div>)}</li>
          <li>Languages: {languages.map( language => <div>{language.name} </div>)}</li> */}
        </ul>
    </div>
  )
}

export default Country