
try {
  document.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click')
  })
} catch (error) {
  console.log(error)
}

// eslint-disable-next-line no-unused-vars
const test = 5123123
console.log('test: ', test)
