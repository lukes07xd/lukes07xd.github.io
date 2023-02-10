/*
IT IS STRICTLY FORBIDDEN TO COPY THIS CODE AT ANY POINT OF TIME
AUTHOR: Filip Lukeš 
YOU CAN FIND MY CONTACT AT: https://lukes07xd.github.io
*/
function scroll_to(get_id) {
  let id = get_id.replace("#", "")
  const el = document.getElementById(id)
  el.scrollIntoView({behavior: "smooth", inline: "nearest"})
  history.pushState(null, null, `#${id}`)
}

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY
  var logoContainer = document.getElementsByClassName('arrow')[0]
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled')
  else logoContainer.classList.remove('arrow--scrolled')
})

document.addEventListener('DOMContentLoaded', function() {
  var years_since = new Date("2018-08-20").getTime()
  var today = new Date().getTime()

  var ms = today - years_since
  var m = Math.floor(ms / 60000)
  var h = Math.floor(m / 60)
  var d = Math.floor(h / 24)
  var y = Math.floor(d / 365)
  var yy = y + 2018

  document.getElementById("years-of-coding").innerText = y + " years"
})

function reloadbtn() {
  scroll(0,0)
  location.reload(true)
}

function testjs() {
  alert("JavaScript is working! The file this has tested is main.js")
}
