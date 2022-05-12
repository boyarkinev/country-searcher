const baseUrl = 'https://restcountries.com/v3.1/';

export const countriesApi = async (value) => {
  const res = await fetch(`${baseUrl}name/${value}`);
  if (!res.ok) {
    return Promise.reject(`Неверный запрос. Ошибка: ${res.status}`);
  }
  return res.json();
};