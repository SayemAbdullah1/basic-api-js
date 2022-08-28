const countries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
        .then(data => displayCuntries(data))
}
const showCountries = document.getElementById('country');
const displayCuntries = countries =>{
    countries.forEach(country => {
        // console.log(country)

        const newDiv = document.createElement('div')
        newDiv.classList.add('NewCountry')
        newDiv.innerHTML = `
        <p>Name: ${country.name.common}</p>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
    
        `;
        
        showCountries.appendChild(newDiv)
    });
}


const loadCountryDetail = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
        .then(data => displaycountryDetail(data[0]))
}
const displaycountryDetail = country =>{
    console.log(country)
    const loadDetails = document.getElementById('country-detail')
    loadDetails.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;


}
countries()