export default class CountriesApi {

	getCountries = (value) => {
		return fetch(`https://restcountries.eu/rest/v2/name/${value}`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject(`Ошибка: ${res.status}`)
      }
			return res.json()
		})
	}
}