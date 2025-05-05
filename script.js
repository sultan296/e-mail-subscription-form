const scriptURL = 'https://script.google.com/macros/s/AKfycbxwu7_9lOFUkjvUWVsyhyu-rOhy462Zg_FyaWxvfSHVwcxX3yNaHb4c7mZymJVLFLDN/exec'
const form = document.forms["submit-to-google-sheet"];
const span = document.querySelector("SPAN");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        span.innerHTML = "Thank You For Subscribing";
        console.log("success")
        setTimeout(() => {
            span.innerHTML = "";
        }, 5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})