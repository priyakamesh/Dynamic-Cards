console.log("Welcome to cards")
document.getElementById("button").addEventListener("click", function () {

  document.getElementById("cards").innerHTML += `<div class="card"><div>${document.getElementById("text").value}</div><button>Delete</button></div>`
  document.querySelectorAll(".card").forEach(function (element) {
    element.addEventListener("click", function(e) {
      e.target.parentNode.remove(element)
  })}
 )}
)
