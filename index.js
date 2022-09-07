const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '492384d307msh27a478b294303fcp1e10d9jsn213fecda08a9',
		'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
	}
};
const init = () => {
fetch('https://random-facts2.p.rapidapi.com/getfact', options)
.then(resp => resp.json())
.then(data => randomFacts(data))
}
document.addEventListener(`DOMContentLoaded`, init)