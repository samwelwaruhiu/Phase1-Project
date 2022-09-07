//defining the method and headers..Api from rapidapi
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '492384d307msh27a478b294303fcp1e10d9jsn213fecda08a9',
		'X-RapidAPI-Host': 'random-facts2.p.rapidapi.com'
	}
};

//function loading the Dom...after initial HTML document has been completely loaded and parsed, 
const init = () => {

const getAnotherFact = document.querySelector(`.butttn`)

getAnotherFact.addEventListener(`click`, (e) => {
e.preventDefault(); 
 //fetch fetches the data returns a promise..and so the 1st then. is where we implement the json,2nd then have our data for DOM manipulation
fetch('https://random-facts2.p.rapidapi.com/getfact', options)
.then(resp => resp.json())
.then(data => randomFacts(data))

//function to Display Fetched Data on the Page
function randomFacts(newfact){
    alert("Loading..")
    const quotes = document.getElementById(`contentid`)
    quotes.textContent = newfact.Fact;
    
}
})

//Target the form
let form = document.querySelector(`form`)
form.addEventListener(`submit` , (e) => {
    e.preventDefault(e); //prevent default actions
    let cmt = document.getElementById(`cmt`).value;  //target where the comments are written 
    haveComments(cmt) //have a function to manipulate the appending and deleting
    form.reset() //reseting the placeholder after a comment is written
})

const haveComments = (allcomments) => {
    let ul = document.createElement('li') //make element for listing our comments
    let deletebutton = document.createElement(`button`) //create a deleting button
    deletebutton.addEventListener(`click`, handleDelete); //have an event listener which will have a callback function of deleting
    deletebutton.textContent = `  x   ` //have the content you want it to be displayed on the button
    ul.textContent = `${allcomments}` //the element of ul which you created takes in the content written
    ul.appendChild(deletebutton); //append the delete button
    document.getElementById('comments-list').appendChild(ul) //list comments
}
//fuction that handles delete
function handleDelete(e){
    e.target.parentNode.remove();
  }

}

document.addEventListener(`DOMContentLoaded`, init)