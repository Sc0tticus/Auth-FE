const form = document.querySelector('form')


form.addEventListener('submit', submitLogin)

function submitLogin(event){
  event.preventDefault()

  formData = new FormData(event.target)
  username = formData.get('username')
  password  = formData.get('password')

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify({username, password})
  })
  .then(response => response.json())
  .then(console.log)
}