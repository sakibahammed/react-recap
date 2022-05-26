import logo from './logo.svg';
import './App.css';
import Countries from './Component/Countries/Countries';


function App() {
  return (
    <div className="App">
    <Countries></Countries>
    </div> 
  );
}


// function LoadCountries(){
//   const [country,setCountry] = useState([]);
//   useEffect(()=>{
//       fetch('https://restcountries.com/v3.1/all')
//       .then(res=>res.json())
//       .then(data=>setCountry(data))
//   },[])
//   return(
//     <div>
//       <h1>Visiting Every Country of the world</h1>
//         <h4>Total Country : {country.length}</h4>
//         {
//           country.map(country=><Country name={country.name.common} population={country.population}></Country>)
//         }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>{props.name}</h2>
//       <h4>Population : {props.population}</h4>
//     </div>
//   )
// }

export default App;
