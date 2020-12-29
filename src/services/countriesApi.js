const api = {
  url: 'https://restcountries.eu/rest/v2/'
}

const countriesApi = async (value) => {
  const res = await fetch(`${api.url}name/${value}`);
  if (!res.ok) {
    return Promise.reject(`Неверный запрос. Ошибка: ${res.status}`);
  }
  return res.json();
};

export default countriesApi;