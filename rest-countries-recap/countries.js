const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries = countries =>{
        console.log(countries)

        const allCountriesHtml = countries.map(country=>getCountriesHtml(country) );
        // console.log(allCountriesHtml[0])
    const container = document.getElementById('countries')
    container.innerHTML = allCountriesHtml.join(' ')
         
}

const getCountriesHtml = country =>{
    return `
        <div>
            <h2>${country.name.common} </h2>
            <h4>${country.region}</h4>
        </div
    `
}

loadCountries();

