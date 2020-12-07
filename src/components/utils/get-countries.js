const getCountries = async (value) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${value}`);
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export default getCountries;
