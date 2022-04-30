// Selector.js


const Selector = () => {
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select A Country</option>
        {countriesJson.map((country, index) => (
          <option key={index} value={country.Slug}>{country.Country}</option>
        ))}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;
