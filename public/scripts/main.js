const $submitButton = document.querySelector('#submit')
const $userInput = document.querySelector('#userInput')
const $results = document.querySelector('#results')

const API_ENDPOINT = 'http://localhost:3000/api/convert?input='

const getData = (userInput) => {
  return fetch(API_ENDPOINT + userInput)
  .then(response => {
    if ( response.ok ) {
      return response.json()
    }
    return response.text()
  })
  .catch(err => {
    console.log(err)
  })
}

const renderError = (err) => {
  $results.innerHTML = `<p>${err}</p>`
}

const renderConversion = (conversion) => {
  const html = `
  <p>${conversion.string}</p>
  <p>${JSON.stringify(conversion)}</p>
  `
  $results.innerHTML = html
}

const renderData = (data) => {
  if ( typeof data === 'string' ) {
    renderError(data)
  } else {
    renderConversion(data)
  }
}

$submitButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  evt.stopPropagation()

  const userInput = $userInput.value
  if ( userInput.length < 1 ) { return }

  getData(userInput)
  .then(renderData)
  .catch(err => {
    console.log(err)
  })
})