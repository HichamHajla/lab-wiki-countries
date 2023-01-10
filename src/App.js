import './App.css';
import {useState , useEffect} from 'react'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import {Routes, Route} from "react-router-dom";
//import countries from "./countries.json"
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    await axios.get(`https://ih-countries-api.herokuapp.com/countries`)
    .then(res => {
        setData(res.data)
        console.log(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const sortedData = data.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });


  return (
    <div className="App">
    <Navbar />
    <div className="container">
      <div className="row">
    <CountriesList countries={sortedData}/>
    <Routes>
    <Route path="/:id" element={ <CountryDetails countries={data}/>}/>
    </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
