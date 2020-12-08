const countriesApi = {
  url: 'https://restcountries.eu/rest/v2/'
}

const getCountries = async (value) => {
  const res = await fetch(`${countriesApi.url}name/${value}`);
  if (!res.ok) {
    return Promise.reject(`Неверный запрос. Ошибка: ${res.status}`);
  }
  return res.json();
};

export default getCountries;