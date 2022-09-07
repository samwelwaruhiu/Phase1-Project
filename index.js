const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '492384d307msh27a478b294303fcp1e10d9jsn213fecda08a9',
		'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
	}
};
const init = () => {

const getAnotherFact = document.querySelector(`.butttn`)

getAnotherFact.addEventListener(`click`, (e) => {
e.preventDefault(); 

fetch('https://random-facts2.p.rapidapi.com/getfact', options)
.then(resp => resp.json())
.then(data => randomFacts(data))

function randomFacts(newfact){
    alert("Loading..")
    const quotes = document.getElementById(`contentid`)
    quotes.textContent = newfact.Fact;
    
}
})
}

document.addEventListener(`DOMContentLoaded`, init)