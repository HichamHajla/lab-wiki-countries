import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
//import { useState , useEffect } from 'react';

const CountryDetails = ({countries}) => {
    const {id} = useParams() 
    //const [myCountry, setMyCountry] = useState({});
    //const { alpha3Code } = useParams();

    //useEffect(() => {
      //const fetchData = async () => {
        //const result = await axios(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
        //setMyCountry(result.data);
      //};
      //fetchData();}, [alpha3Code]);
  
    //const country = myCountry
    const country = countries.find((country) => country.alpha3Code === id)
        return(
        <>
            <div key={id} className="col-7">
            <img style={{ height: "100px", paddingBottom:"10px" }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km<sup>2</sup></td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                  <ul>
                  {country.borders.map(border => {
                    const borderName = countries.find((country) => country.alpha3Code === border)
                        return (  
                            <li key={border} style={{listStyleType: "none" , paddingRight :"40px"}}>
                                <Link to={`/${border}`}>{borderName.name.common}</Link>
                            </li>
                        );
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>)}
    



export default CountryDetails