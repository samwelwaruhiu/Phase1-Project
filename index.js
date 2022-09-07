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

let form = document.querySelector(`form`)
form.addEventListener(`submit` , (e) => {
    e.preventDefault(e); 
    let cmt = document.getElementById(`cmt`).value;
    haveComments(cmt) 
})

const haveComments = (allcomments) => {
    let ul = document.createElement('li')
    let deletebutton = document.createElement(`button`)
    deletebutton.addEventListener(`click`, handleDelete);
    deletebutton.textContent = `  x   `
    ul.textContent = `${allcomments}`
    ul.appendChild(deletebutton); 
    document.getElementById('comments-list').appendChild(ul)
}

function handleDelete(e){
    e.target.parentNode.remove();
  }

}

document.addEventListener(`DOMContentLoaded`, init)