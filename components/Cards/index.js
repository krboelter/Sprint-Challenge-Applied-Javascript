// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cards = document.querySelector('.cards-container');
let jsTab = document.querySelector('.javascript');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        let bootstrapArray = response.data.articles.bootstrap;
        let javascriptArray = response.data.articles.javascript;
        let jqueryArray = response.data.articles.jquery;
        let nodeArray = response.data.articles.node;
        let technologyArray = response.data.articles.technology;

        bootstrapArray.forEach(n => {
            cards.appendChild(createCard(n))
        })

        javascriptArray.forEach(n => {
            cards.appendChild(createCard(n))
        })

        jqueryArray.forEach(n => {
            cards.appendChild(createCard(n))
        })

        nodeArray.forEach(n => {
            cards.appendChild(createCard(n))
        })

        technologyArray.forEach(n => {
            cards.appendChild(createCard(n))
        })
    })

        .catch(err => console.log(err))


function createCard(obj) {
    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    let headlineDiv = document.createElement('div')
    headlineDiv.classList.add('headline')
    let authorDiv = document.createElement('div')
    authorDiv.classList.add('author')
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img-container')
    let img = document.createElement('img')
    let span = document.createElement('span')

    headlineDiv.textContent = `${obj.headline}`
    img.src = `${obj.authorPhoto}`
    span.textContent = `By: ${obj.authorName}`

    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(img)
    authorDiv.appendChild(span)

    return cardDiv
}

console.log(document.querySelector('.cards-container'))