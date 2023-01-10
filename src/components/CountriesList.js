import { NavLink } from "react-router-dom"
import { useState } from "react";




const CountriesList = ({countries}) =>{
    const initialActive = {};
    countries.forEach(country => {
    initialActive[country.alpha3Code] = false;});

    const [active, setActive] = useState(initialActive);

    const handleClick = country => {
        const newActive = {...active};
        Object.keys(active).forEach(key => {
          newActive[key] = key === country.alpha3Code;
        });
        setActive(newActive);
      };

    return(
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                 <div className="list-group">
                    <div style={{ position: "relative" }}>
                        {countries.map((country) => {
                            return(
                                <NavLink key={country.alpha3Code} className={`list-group-item list-group-item-action ${active[country.alpha3Code] ? "active" : ""}`} onClick={() => handleClick(country)} to={`/${country.alpha3Code}`}>
                                    <div style={{ position: "absolute", top: 0 }}>
                                    <img style={{ height: "20px", paddingLeft:"160px" }} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" /></div>
                                    <div style={{ paddingTop: "20px" }}>{country.name.common}</div>
                                </NavLink>
                            )})}
                    </div>
                </div>
            </div>
     )
}
    
                
                


export default CountriesList




